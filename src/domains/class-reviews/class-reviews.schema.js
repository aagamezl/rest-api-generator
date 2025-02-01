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

export const classReviews = pgTable('classreview', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  created_at: timestamp('created_at', { precision: 6, withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { precision: 6, withTimezone: true })
    .defaultNow()
    .notNull()
})

const selectSchema = createSelectSchema(classReviews)

export const SelectClassReviewSchema = partial(selectSchema)

export const CreateClassReviewSchema = omit(selectSchema, [
  'id',
  'created_at',
  'updated_at'
])

const ClassReviewSchema = SelectClassReviewSchema

export const IdClassReviewSchema = pick(SelectClassReviewSchema, ['id'])
export const UpdateClassReviewSchema = partial(CreateClassReviewSchema)

registerSchema('classReviews', 'ClassReview', ClassReviewSchema)
