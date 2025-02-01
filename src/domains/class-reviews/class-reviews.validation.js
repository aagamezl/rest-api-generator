import {
  REQUEST_SEGMENTS,
  createAllResponseSchema,
  createByIdResponseSchema,
  createDeleteByIdResponseSchema,
  createQuerySchema,
  createResponseSchema
} from '../../common/index.js'
import {
  CreateClassReviewSchema,
  IdClassReviewSchema,
  UpdateClassReviewSchema,
  SelectClassReviewSchema
} from './index.js'

export const validations = {
  // POST /class-reviews
  create: {
    [REQUEST_SEGMENTS.BODY]: CreateClassReviewSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createResponseSchema({ $ref: 'ClassReview' })
  },

  // DELETE /class-reviews/:id
  delete: {
    [REQUEST_SEGMENTS.PARAMS]: IdClassReviewSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createDeleteByIdResponseSchema()
  },

  // GET /class-reviews
  getAll: {
    [REQUEST_SEGMENTS.QUERY]: createQuerySchema(),
    [REQUEST_SEGMENTS.RESPONSE]: createAllResponseSchema(SelectClassReviewSchema)
  },

  // GET /class-reviews/:id
  getById: {
    [REQUEST_SEGMENTS.PARAMS]: IdClassReviewSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: 'ClassReview' })
  },

  // PATCH /class-reviews/:id
  patch: {
    [REQUEST_SEGMENTS.PARAMS]: IdClassReviewSchema,
    [REQUEST_SEGMENTS.BODY]: UpdateClassReviewSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: 'ClassReview' })
  },

  // PUT /class-reviews/:id
  put: {
    [REQUEST_SEGMENTS.PARAMS]: IdClassReviewSchema,
    [REQUEST_SEGMENTS.BODY]: CreateClassReviewSchema,
    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: 'ClassReview' })
  }
}
