import { join } from 'node:path'
import { existsSync, writeFileSync } from 'node:fs'

import { createFile, singularize, toPascalCase } from '../../utils/index.js'

export const generateValidations = (dirPath, domain) => {
  const validationPath = join(dirPath, `${domain}.validation.js`)
  createFile(validationPath)

  if (existsSync(validationPath)) {
    const content = [
      'import {',
      '  REQUEST_SEGMENTS,',
      '  createAllResponseSchema,',
      '  createByIdResponseSchema,',
      '  createDeleteByIdResponseSchema,',
      '  createQuerySchema,',
      '  createResponseSchema',
      "} from '../../common/index.js'",
      'import {',
      `  Create${toPascalCase(singularize(domain))}Schema,`,
      `  Id${toPascalCase(singularize(domain))}Schema,`,
      `  Update${toPascalCase(singularize(domain))}Schema,`,
      `  Select${toPascalCase(singularize(domain))}Schema`,
      "} from './index.js'",
      '',
      'export const validations = {',
      `  // POST /${domain}`,
      '  create: {',
      `    [REQUEST_SEGMENTS.BODY]: Create${toPascalCase(singularize(domain))}Schema,`,
      `    [REQUEST_SEGMENTS.RESPONSE]: createResponseSchema({ $ref: '${toPascalCase(singularize(domain))}' })`,
      '  },',
      '',
      `  // DELETE /${domain}/:id`,
      '  delete: {',
      `    [REQUEST_SEGMENTS.PARAMS]: Id${toPascalCase(singularize(domain))}Schema,`,
      '    [REQUEST_SEGMENTS.RESPONSE]: createDeleteByIdResponseSchema()',
      '  },',
      '',
      `  // GET /${domain}`,
      '  getAll: {',
      '    [REQUEST_SEGMENTS.QUERY]: createQuerySchema(),',
      `    [REQUEST_SEGMENTS.RESPONSE]: createAllResponseSchema(Select${toPascalCase(singularize(domain))}Schema)`,
      '  },',
      '',
      `  // GET /${domain}/:id`,
      '  getById: {',
      `    [REQUEST_SEGMENTS.PARAMS]: Id${toPascalCase(singularize(domain))}Schema,`,
      `    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: '${toPascalCase(singularize(domain))}' })`,
      '  },',
      '',
      `  // PATCH /${domain}/:id`,
      '  patch: {',
      `    [REQUEST_SEGMENTS.PARAMS]: Id${toPascalCase(singularize(domain))}Schema,`,
      `    [REQUEST_SEGMENTS.BODY]: Update${toPascalCase(singularize(domain))}Schema,`,
      `    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: '${toPascalCase(singularize(domain))}' })`,
      '  },',
      '',
      `  // PUT /${domain}/:id`,
      '  put: {',
      `    [REQUEST_SEGMENTS.PARAMS]: Id${toPascalCase(singularize(domain))}Schema,`,
      `    [REQUEST_SEGMENTS.BODY]: Create${toPascalCase(singularize(domain))}Schema,`,
      `    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: '${toPascalCase(singularize(domain))}' })`,
      '  }',
      '}',
      ''
    ].join('\n')

    writeFileSync(validationPath, content)
  }
}
