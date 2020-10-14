import test = require('japa')
import { checkHealth, HealthcheckServer } from '../index'
import { resolve } from 'path'
const file = resolve('test.file.txt')

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
const healcheckServer = new HealthcheckServer(file)
test('Healthy app', async (assert) => {
  await healcheckServer.ping()
  assert.isTrue(checkHealth(file, 1000))
})

test('Unhealthy app', async (assert) => {
  await sleep(1000)
  assert.isFalse(checkHealth(file, 1000))
})
