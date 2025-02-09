import { cpSync } from 'node:fs'
import { join } from 'node:path'

export const generateApplication = (name, applicationPath, currentPath) => {
  const frameworkPath = join(currentPath, 'framework')

  cpSync(frameworkPath, join(applicationPath, name), { recursive: true })
}
