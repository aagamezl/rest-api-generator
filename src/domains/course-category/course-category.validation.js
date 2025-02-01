import {
  REQUEST_SEGMENTS,
  createAllResponseSchema,
  createByIdResponseSchema,
  createDeleteByIdResponseSchema,
  createQuerySchema,
  createResponseSchema
} from '../../common/index.js'
import {
  CreateCourseCategorySchema,
  IdCourseCategorySchema,
  UpdateCourseCategorySchema,
  SelectCourseCategorySchema
} from './index.js'

export const validations = {
  // POST /course-category
  create: {
    [REQUEST_SEGMENTS.BODY]: CreateCourseCategorySchema,
    [REQUEST_SEGMENTS.RESPONSE]: createResponseSchema({ $ref: 'CourseCategory' })
  },

  // DELETE /course-category/:id
  delete: {
    [REQUEST_SEGMENTS.PARAMS]: IdCourseCategorySchema,
    [REQUEST_SEGMENTS.RESPONSE]: createDeleteByIdResponseSchema()
  },

  // GET /course-category
  getAll: {
    [REQUEST_SEGMENTS.QUERY]: createQuerySchema(),
    [REQUEST_SEGMENTS.RESPONSE]: createAllResponseSchema(SelectCourseCategorySchema)
  },

  // GET /course-category/:id
  getById: {
    [REQUEST_SEGMENTS.PARAMS]: IdCourseCategorySchema,
    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: 'CourseCategory' })
  },

  // PATCH /course-category/:id
  patch: {
    [REQUEST_SEGMENTS.PARAMS]: IdCourseCategorySchema,
    [REQUEST_SEGMENTS.BODY]: UpdateCourseCategorySchema,
    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: 'CourseCategory' })
  },

  // PUT /course-category/:id
  put: {
    [REQUEST_SEGMENTS.PARAMS]: IdCourseCategorySchema,
    [REQUEST_SEGMENTS.BODY]: CreateCourseCategorySchema,
    [REQUEST_SEGMENTS.RESPONSE]: createByIdResponseSchema({ $ref: 'CourseCategory' })
  }
}
