import { checkHealth } from './index'

const file = process.argv[process.argv.length - 2]
const threshold = parseInt(process.argv[process.argv.length - 1])
const isHealthy = checkHealth(file, threshold)
if (!isHealthy) {
  console.error('App is not healthy')
  process.exit(1)
}
