import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { createFile, toCamelCase } from '../../utils/index.js'

export const generateModel = (dirPath, domain) => {
  const modelPath = join(dirPath, `${domain}.model.js`)

  createFile(modelPath)

  if (existsSync(modelPath)) {
    const content = [
      'import { baseModel } from \'../../common/index.js\'',
      `import { ${toCamelCase(domain)} } from './${domain}.schema.js'`,
      '',
      `export const model = baseModel(${toCamelCase(domain)})`,
      ''
    ]

    writeFileSync(modelPath, content.join('\n').trim())
  }
}
