const express = require('express')
const productRoutes = express.Router()

// Chamando todos os controllers
const ProductController = require('../controllers/ProductsController')

// Rotas
productRoutes.get('/products', ProductController.index)
productRoutes.post('/create', ProductController.store)
productRoutes.post('/products/:id', ProductController.detail)
productRoutes.put('/products/:id', ProductController.update)
productRoutes.delete('/products/:id', ProductController.destroy)



module.exports = productRoutes