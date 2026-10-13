#!/usr/bin/env python3
"""Fast, dependency-free checks for the preserved Automate It repository."""

from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

REQUIRED_PATHS = (
    "README.md",
    "LICENSE",
    "SECURITY.md",
    "docs/ARCHITECTURE.md",
    "package.json",
    "package-lock.json",
    "backend/go.mod",
    "edge/server.py",
    "edge/requirements.txt",
    "ml/training/requirements.txt",
)

FORBIDDEN_TRACKED_PATHS = {
    "android/app/google-services.json",
    "backend/automate_it_server",
}

SECRET_PATTERNS = (
    re.compile(r"AKIA[0-9A-Z]{16}"),
    re.compile(r"gh[pousr]_[A-Za-z0-9_]{20,}"),
    re.compile(r"github_pat_[A-Za-z0-9_]{20,}"),
    re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
)


def fail(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)


def tracked_files() -> list[str]:
    result = subprocess.run(
        ["git", "ls-files"],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout.splitlines()


def validate_json(files: list[str]) -> None:
    for relative_path in files:
        path = ROOT / relative_path
        if path.suffix in {".json", ".ipynb"}:
            try:
                with path.open(encoding="utf-8") as stream:
                    json.load(stream)
            except (OSError, UnicodeDecodeError, json.JSONDecodeError) as error:
                fail(f"invalid JSON in {relative_path}: {error}")


def validate_markdown_links() -> None:
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    for target in re.findall(r"!?(?:\[[^]]*\])\(([^)]+)\)", readme):
        if "://" in target or target.startswith("#") or target.startswith("mailto:"):
            continue
        local_target = target.split("#", 1)[0]
        if local_target and not (ROOT / local_target).exists():
            fail(f"README links to missing path: {target}")


def validate_secrets(files: list[str]) -> None:
    text_suffixes = {
        ".gradle",
        ".js",
        ".json",
        ".md",
        ".properties",
        ".py",
        ".sh",
        ".ts",
        ".txt",
        ".xml",
        ".yml",
        ".yaml",
    }
    for relative_path in files:
        path = ROOT / relative_path
        if path.suffix.lower() not in text_suffixes or path.suffix == ".ipynb":
            continue
        try:
            content = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for pattern in SECRET_PATTERNS:
            if pattern.search(content):
                fail(f"possible credential found in {relative_path}")


def main() -> None:
    for relative_path in REQUIRED_PATHS:
        if not (ROOT / relative_path).is_file():
            fail(f"required file is missing: {relative_path}")

    files = tracked_files()
    forbidden = FORBIDDEN_TRACKED_PATHS.intersection(files)
    if forbidden:
        fail(f"generated or local configuration is tracked: {sorted(forbidden)}")

    oversized = [
        relative_path
        for relative_path in files
        if (ROOT / relative_path).is_file()
        and (ROOT / relative_path).stat().st_size > 25 * 1024 * 1024
    ]
    if oversized:
        fail(f"tracked files exceed 25 MiB: {oversized}")

    validate_json(files)
    validate_markdown_links()
    validate_secrets(files)

    python_files = [relative_path for relative_path in files if relative_path.endswith(".py")]
    for relative_path in python_files:
        result = subprocess.run(
            [sys.executable, "-m", "py_compile", str(ROOT / relative_path)],
            capture_output=True,
            text=True,
        )
        if result.returncode:
            fail(f"Python syntax check failed for {relative_path}: {result.stderr.strip()}")

    print(
        f"Validated {len(files)} tracked files, "
        f"{sum(path.endswith('.ipynb') for path in files)} notebooks, "
        f"and {len(python_files)} Python modules."
    )


if __name__ == "__main__":
    main()
