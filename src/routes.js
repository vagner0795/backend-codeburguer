import { Router } from"express"

import UserController from "./apps/controllers/UserController"
import SessionController from "./apps/controllers/SessionController"

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

export default  routes

