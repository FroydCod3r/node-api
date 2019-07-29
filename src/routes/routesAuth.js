const express = require('express')
const routesAuth = express.Router()

// Chamando todos os controllers

const AuthController = require('../controllers/AuthController')

// Rotas
routesAuth.post('/login', AuthController.login)
routesAuth.post('/register', AuthController.register)


module.exports = routesAuth