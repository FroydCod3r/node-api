const express = require('express')
const routes = express.Router()
//middlewareauth
const middlewareauth = require('../middlewares/auth')

// Rotas auth
const AuthController = require('../controllers/AuthController')
routes.post('/auth/login', AuthController.login)
routes.post('/auth/register', AuthController.register)

// Rotas Product
const ProductController = require('../controllers/ProductsController')
routes.get('/products/list', middlewareauth, ProductController.index)
routes.post('/products/create', middlewareauth, ProductController.store)
routes.post('/products/detail/:id', middlewareauth, ProductController.detail)
routes.put('/products/change/:id', middlewareauth, ProductController.update)
routes.delete('/products/remove/:id', middlewareauth, ProductController.destroy)


module.exports = routes