# Architecture

Automate It is split into four cooperating layers. The separation reflects the original final-year-project deployment, where a mobile client communicated with services on a trusted home network and a Raspberry Pi controlled the attached hardware.

## Components

### React Native mobile application

The application in `src/` provides registration, sign-in, home and appliance views, remote-control screens, voice recording, and television-channel setup. Redux keeps the active account state. The client communicates with two services:

- the Go API on port `3000` for user and channel data;
- the Raspberry Pi Flask API on port `5000` for audio and appliance commands.

### Go account API

`backend/` uses Fiber and the MongoDB Go driver. It exposes registration, login, logout, unregister, profile, and channel-update endpoints. The original implementation targets a local MongoDB database named `automateitdb`.

### Raspberry Pi control service

`edge/server.py` receives recorded audio and direct UI commands. `main.py` loads the exported models, resolves an Urdu command into appliance, room, action, or channel information, and drives GPIO pins in the physical installation.

### Speech models

`ml/training/` contains the notebooks and preprocessing utilities used to train the command pipeline. Exported TensorFlow SavedModels live under `ml/models/` for trigger-word, appliance, room, action, channel, and combined command detection.

## Data flow

1. A user selects a control in the app or records an Urdu voice command.
2. Account-related requests go to the Go API and MongoDB.
3. Appliance commands and recorded audio go to the local Flask service.
4. For voice input, the Raspberry Pi pipeline extracts audio features and applies the relevant models.
5. The resolved command is mapped to a GPIO or configured television-channel action.

## Deployment boundary

The original system assumed all services were on a private, trusted network. It did not establish a hardened internet-facing security boundary. Any new deployment should add authenticated service-to-service requests, encrypted transport, restricted origins, secret management, password hashing, request validation, audit logging, and safe hardware interlocks.
