import { Router } from 'express'
import UserController from '../controllers/user.controller'

class UserRoutes {
  router = Router()
  controller = new UserController()

  constructor() {
    this.initializeRouter()
  }

  initializeRouter() {

    // Create a new User
    // @ts-ignore
    this.router.post( '/', this.controller.create )

    // Retrieve all Users
    // @ts-ignore
    this.router.get( '/', this.controller.findAll )

    // Retrieve a single User with id
    // @ts-ignore
    this.router.get( '/:id', this.controller.findOne )

    // Update a User with id
    // @ts-ignore
    this.router.put( '/:id', this.controller.update )

    // Delete a User with id
    // @ts-ignore
    this.router.delete( '/:id', this.controller.delete )
  }
}

export default new UserRoutes().router