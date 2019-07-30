const express = require('express')
const productRoutes = express.Router()

//middlewareauth
const middlewareauth = require('../middlewares/auth')

// Chamando todos os controllers
const ProductController = require('../controllers/ProductsController')

// Rotas
productRoutes.get('/list', middlewareauth, ProductController.index)
productRoutes.post('/create', middlewareauth, ProductController.store)
productRoutes.post('/detail/:id', middlewareauth, ProductController.detail)
productRoutes.put('/change/:id', middlewareauth, ProductController.update)
productRoutes.delete('/remove/:id', middlewareauth, ProductController.destroy)



module.exports = productRoutes