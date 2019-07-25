const express = require('express')
const routes = express.Router()

// Chamando todos os controllers
const ProductController = require('./controllers/ProductsController');

// Rotas
routes.get('/products', ProductController.index);
routes.post('/create', ProductController.store);
routes.post('/products/:id', ProductController.detail);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;