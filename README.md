# Dependencies free library for docker container healthcheck using fs
```bash
npm i @tvorilas/node-healthchecker
```

## Using on app side

```javascript 
import { HealthcheckServer } from '@tvorilas/node-healthchecker'
const healthcheckServer = new HealthcheckServer('/app/healthcheck.txt')

// Do something and call this method
healthcheckServer.ping()

```

## Using in compose-file

```yaml
services:
  app:
    healthcheck:
      test: ["CMD", "node /app/node_modules/@tvorilas/node-healthchecker/build/checkHealth.js", "/app/healthcheck.txt", "120000"] # 2 minutes in ms
      interval: 5s
      timeout: 20s
      retries: 10

```