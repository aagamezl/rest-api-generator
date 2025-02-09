import {
  REQUEST_SEGMENTS,
  createAllResponseSchema,
  createByIdResponseSchema,
  createDeleteByIdResponseSchema,
  createQuerySchema,
  createResponseSchema
} from '../../common/index.js'
import {
  CreateUserPostSchema,
  IdUserPostSchema,
  UpdateUserPostSchema,
  SelectUserPostSchema
} from './index.js'

export const validations = {
  // POST /user-post
  create: {
    [REQUEST_SEGMENTS.BODY]: CreateUserPostSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createResponseSchema({ $ref: 'UserPost' })
  },

  // DELETE /user-post/:id
  delete: {
    [REQUEST_SEGMENTS.PARAMS]: IdUserPostSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createDeleteByIdResponseSchema()
  },

  // GET /user-post
  getAll: {
    [REQUEST_SEGMENTS.QUERY]: createQuerySchema(),
    [REQUEST_SEGMENTS.RESPONSE]: createAllResponseSchema(SelectUserPostSchema)
  },

  // GET /user-post/:id
  getById: {
    [REQUEST_SEGMENTS.PARAMS]: IdUserPostSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: 'UserPost' })
  },

  // PATCH /user-post/:id
  patch: {
    [REQUEST_SEGMENTS.PARAMS]: IdUserPostSchema,
    [REQUEST_SEGMENTS.BODY]: UpdateUserPostSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: 'UserPost' })
  },

  // PUT /user-post/:id
  put: {
    [REQUEST_SEGMENTS.PARAMS]: IdUserPostSchema,
    [REQUEST_SEGMENTS.BODY]: CreateUserPostSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: 'UserPost' })
  }
}
