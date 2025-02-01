import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import {
  createFile,
  singularize,
  toCamelCase,
  toPascalCase,
  toSnakeCase
} from '../../utils/index.js'

export const generateSchema = (dirPath, domain) => {
  const schemaPath = join(dirPath, `${domain}.schema.js`)

  createFile(schemaPath)

  if (existsSync(schemaPath)) {
    const content = [
      'import {',
      '  pgTable,',
      '  timestamp,',
      '  uuid',
      "} from 'drizzle-orm/pg-core'",
      '',
      "import { createSelectSchema } from '../../common/schema/inferSchema.js'",
      "import { omit } from '../../common/schema/omit.js'",
      "import { partial } from '../../common/schema/partial.js'",
      "import { pick } from '../../common/schema/pick.js'",
      "import { registerSchema } from '../../common/schema/registry.js'",
      '',
      `export const ${toCamelCase(domain)} = pgTable('${toSnakeCase(toPascalCase(singularize(domain)))}', {`,
      "  id: uuid('id').primaryKey().defaultRandom().notNull(),",
      "  created_at: timestamp('created_at', { precision: 6, withTimezone: true })",
      '    .defaultNow()',
      '    .notNull(),',
      "  updated_at: timestamp('updated_at', { precision: 6, withTimezone: true })",
      '    .defaultNow()',
      '    .notNull()',
      '})',
      '',
      `const selectSchema = createSelectSchema(${toCamelCase(domain)})`,
      '',
      `export const Select${toPascalCase(singularize(domain))}Schema = partial(selectSchema)`,
      `export const Create${toPascalCase(singularize(domain))}Schema = omit(selectSchema, [`,
      "  'id',",
      "  'created_at',",
      "  'updated_at'",
      '])',
      '',
      `const ${toPascalCase(singularize(domain))}Schema = Select${toPascalCase(singularize(domain))}Schema`,
      '',
      `export const Id${toPascalCase(singularize(domain))}Schema = pick(Select${toPascalCase(singularize(domain))}Schema, ['id'])`,
      `export const Update${toPascalCase(singularize(domain))}Schema = partial(Create${toPascalCase(singularize(domain))}Schema)`,
      '',
      `registerSchema('${toCamelCase(domain)}', '${toPascalCase(singularize(domain))}', ${toPascalCase(singularize(domain))}Schema)`
    ]

    writeFileSync(schemaPath, content.join('\n').trim())
  }
}
