import { promises as fs, statSync, existsSync } from 'fs'

export class HealthcheckServer {
  constructor(public file: string) {}
  async ping() {
    try {
      await fs.utimes(this.file, new Date(), new Date())
    } catch (err) {
      await fs.writeFile(this.file, 'w')
    }
  }
}

export function checkHealth(file: string, threshold: number) {
  const fileExists = existsSync(file)
  if (!fileExists) {
    return false
  }
  const { mtimeMs } = statSync(file)
  const date = new Date()
  const currentMs = date.getTime()
  const timeGone = currentMs - mtimeMs
  return timeGone < threshold
}
