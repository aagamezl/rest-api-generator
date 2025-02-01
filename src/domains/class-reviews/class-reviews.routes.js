import { controller } from './class-reviews.controller.js'
import { validations } from './class-reviews.validation.js'

export const classReviewsRoutes = async (app) => {
  app.post(
    '/class-reviews',
    { schema: { ...validations.create, tags: ['ClassReview'] } },
    controller.create
  )

  app.get(
    '/class-reviews',
    { schema: { ...validations.getAll, tags: ['ClassReview'] } },
    controller.getAll
  )

  app.get(
    '/class-reviews/:id',
    { schema: { ...validations.getById, tags: ['ClassReview'] } },
    controller.getById
  )

  app.delete(
    '/class-reviews/:id',
    { schema: { ...validations.delete, tags: ['ClassReview'] } },
    controller.deleteById
  )

  app.patch(
    '/class-reviews/:id',
    { schema: { ...validations.patch, tags: ['ClassReview'] } },
    controller.patch
  )

  app.put(
    '/class-reviews/:id',
    { schema: { ...validations.put, tags: ['ClassReview'] } },
    controller.update
  )
}
