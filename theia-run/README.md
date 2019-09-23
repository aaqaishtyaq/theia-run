# Theia Run

Example:

- **Che**
```json
        {
            "type": "che",
            "label": "Test",
            "command": "yarn test",
            "target": {
                "workspaceId": "",
                "containerName": ""
            },
            "previewUrl": "${server.app}"
        }
```

- **Shell**
```json
        {
            "label": "Run",
            "type": "shell",
            "cwd": "${workspaceFolder}",
            "command": "",
            "args": [
                "",
                "",
                ""
            ]
        }
```
