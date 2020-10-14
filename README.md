# Dependencies free library for docker container healthcheck using fs

## Using on app side

```javascript 
import { HealthcheckServer } from 'node-healthchecker'
const healthcheckServer = new HealthcheckServer('/app/healthcheck.txt')

// Do something and call this method
healthcheckServer.ping()

```

## Using in compose-file

```yaml
services:
  app:
    healthcheck:
      test: ["CMD", "node", "run", "health-check", "--", "/app/healthcheck.txt", "120000"] # 2 minutes in ms
      interval: 5s
      timeout: 20s
      retries: 10

```