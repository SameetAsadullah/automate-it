# Security Policy

## Project status

Automate It is a preserved university final-year-project prototype. It is maintained as a portfolio and learning artifact, not as a supported production home-automation platform.

## Reporting a vulnerability

Please do not open a public issue containing credentials, personal data, or exploit details. Report a concern privately through the repository owner's GitHub profile.

## Safe deployment

Do not expose the included Go or Flask services directly to the internet. Before deploying beyond an isolated development network, add authentication and authorization, password hashing, TLS, input validation, restricted CORS, rate limiting, secret management, and appropriate safeguards around physical device control.

Use your own Firebase project configuration. `android/app/google-services.json` is intentionally excluded from version control.
