const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductsController');

// Rotas
routes.get('/products', ProductController.index)

module.exports = routes;