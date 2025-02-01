import { join } from 'node:path'
import { existsSync, writeFileSync } from 'node:fs'

import { createFile } from '../../utils/fileSystem/createFile.js'
import { singularize } from '../../utils/string/singularize.js'
import { toCamelCase } from '../../utils/string/toCamelCase.js'
import { toKebabCase } from '../../utils/string/toKebabCase.js'
import { toPascalCase } from '../../utils/string/toPascalCase.js'

/**
 *
 * @param {string} dirPath
 * @param {string} domain
 * @returns {void}
 */
export const generateRoutes = (dirPath, domain) => {
  const routesPath = join(dirPath, `${domain}.routes.js`)

  createFile(routesPath)

  if (existsSync(routesPath)) {
    const content = [
      `import { controller } from './${domain}.controller.js'`,
      `import { validations } from './${domain}.validation.js'`,
      '',
      `export const ${toCamelCase(domain)}Routes = async (app) => {`,
      '  app.post(',
      `    '/${toKebabCase(domain)}',`,
      `    { schema: { ...validations.create, tags: ['${toPascalCase(singularize(domain))}'] } },`,
      '    controller.create',
      '  )',
      '',
      '  app.get(',
      `    '/${toKebabCase(domain)}',`,
      `    { schema: { ...validations.getAll, tags: ['${toPascalCase(singularize(domain))}'] } },`,
      '    controller.getAll',
      '  )',
      '',
      '  app.get(',
      `    '/${toKebabCase(domain)}/:id',`,
      `    { schema: { ...validations.getById, tags: ['${toPascalCase(singularize(domain))}'] } },`,
      '    controller.getById',
      '  )',
      '',
      '  app.delete(',
      `    '/${toKebabCase(domain)}/:id',`,
      `    { schema: { ...validations.delete, tags: ['${toPascalCase(singularize(domain))}'] } },`,
      '    controller.deleteById',
      '  )',
      '',
      '  app.patch(',
      `    '/${toKebabCase(domain)}/:id',`,
      `    { schema: { ...validations.patch, tags: ['${toPascalCase(singularize(domain))}'] } },`,
      '    controller.patch',
      '  )',
      '',
      '  app.put(',
      `    '/${toKebabCase(domain)}/:id',`,
      `    { schema: { ...validations.put, tags: ['${toPascalCase(singularize(domain))}'] } },`,
      '    controller.update',
      '  )',
      '}'
    ]

    writeFileSync(routesPath, content.join('\n').trim())
  }
}
