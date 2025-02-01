import {
  pgTable,
  timestamp,
  uuid
} from 'drizzle-orm/pg-core'

import { createSelectSchema } from '../../common/schema/inferSchema.js'
import { omit } from '../../common/schema/omit.js'
import { partial } from '../../common/schema/partial.js'
import { pick } from '../../common/schema/pick.js'
import { registerSchema } from '../../common/schema/registry.js'

export const courseCategory = pgTable('course_category', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  created_at: timestamp('created_at', { precision: 6, withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { precision: 6, withTimezone: true })
    .defaultNow()
    .notNull()
})

const selectSchema = createSelectSchema(courseCategory)

export const SelectCourseCategorySchema = partial(selectSchema)

export const CreateCourseCategorySchema = omit(selectSchema, [
  'id',
  'created_at',
  'updated_at'
])

const CourseCategorySchema = SelectCourseCategorySchema

export const IdCourseCategorySchema = pick(SelectCourseCategorySchema, ['id'])
export const UpdateCourseCategorySchema = partial(CreateCourseCategorySchema)

registerSchema('courseCategory', 'CourseCategory', CourseCategorySchema)
