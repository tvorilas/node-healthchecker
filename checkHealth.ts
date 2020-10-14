import { checkHealth } from './index'

const file = process.argv[2]
const threshold = parseInt(process.argv[3])
const isHealthy = checkHealth(file, threshold)
if (!isHealthy) {
  console.error('App is not healthy')
  process.exit(1)
}
