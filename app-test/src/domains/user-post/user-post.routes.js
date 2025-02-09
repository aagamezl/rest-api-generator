import { controller } from './user-post.controller.js'
import { validations } from './user-post.validation.js'

export const userPostRoutes = async (app) => {
  app.post(
    '/user-post',
    { schema: { ...validations.create, tags: ['UserPost'] } },
    controller.create
  )

  app.get(
    '/user-post',
    { schema: { ...validations.getAll, tags: ['UserPost'] } },
    controller.getAll
  )

  app.get(
    '/user-post/:id',
    { schema: { ...validations.getById, tags: ['UserPost'] } },
    controller.getById
  )

  app.delete(
    '/user-post/:id',
    { schema: { ...validations.delete, tags: ['UserPost'] } },
    controller.deleteById
  )

  app.patch(
    '/user-post/:id',
    { schema: { ...validations.patch, tags: ['UserPost'] } },
    controller.patch
  )

  app.put(
    '/user-post/:id',
    { schema: { ...validations.put, tags: ['UserPost'] } },
    controller.update
  )
}
