import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import UserController from './apps/controllers/UserController'
import SessionController from './apps/controllers/SessionController'
import ProductController from './apps/controllers/ProductController'
import CategoryController from './apps/controllers/CategoryController'
import OrderController from './apps/controllers/OrderController'

import authMiddleware from './apps/middlewares/auth'

const upload = multer(multerConfig)
const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/products', ProductController.index)
routes.post('/products', upload.single('file'), ProductController.store)
routes.put('/products/:id', upload.single('file'), ProductController.update)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.get('/orders', OrderController.index)
routes.post('/orders', OrderController.store)
routes.put('/orders/:id', OrderController.update)

export default routes
