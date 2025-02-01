import { controller } from './course-category.controller.js'
import { validations } from './course-category.validation.js'

export const courseCategoryRoutes = async (app) => {
  app.post(
    '/course-category',
    { schema: { ...validations.create, tags: ['CourseCategory'] } },
    controller.create
  )

  app.get(
    '/course-category',
    { schema: { ...validations.getAll, tags: ['CourseCategory'] } },
    controller.getAll
  )

  app.get(
    '/course-category/:id',
    { schema: { ...validations.getById, tags: ['CourseCategory'] } },
    controller.getById
  )

  app.delete(
    '/course-category/:id',
    { schema: { ...validations.delete, tags: ['CourseCategory'] } },
    controller.deleteById
  )

  app.patch(
    '/course-category/:id',
    { schema: { ...validations.patch, tags: ['CourseCategory'] } },
    controller.patch
  )

  app.put(
    '/course-category/:id',
    { schema: { ...validations.put, tags: ['CourseCategory'] } },
    controller.update
  )
}
