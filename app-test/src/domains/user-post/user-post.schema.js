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

export const userPost = pgTable('user_post', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  created_at: timestamp('created_at', { precision: 6, withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { precision: 6, withTimezone: true })
    .defaultNow()
    .notNull()
})

const selectSchema = createSelectSchema(userPost)

export const SelectUserPostSchema = partial(selectSchema)
export const CreateUserPostSchema = omit(selectSchema, [
  'id',
  'created_at',
  'updated_at'
])

const UserPostSchema = SelectUserPostSchema

export const IdUserPostSchema = pick(SelectUserPostSchema, ['id'])
export const UpdateUserPostSchema = partial(CreateUserPostSchema)

registerSchema('userPost', 'UserPost', UserPostSchema)
