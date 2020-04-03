const express = require('express')
const routes = express.Router()
//middlewareauth
const middlewareauthFunc = require('./middlewares/authFunc')
const middlewareauthAdmin = require('./middlewares/authAdmin')

//reload session
//const SessionController = require('./controllers/SessionController')
//routes.get('/control/reloadsession', middlewareauthFunc, SessionController.index)


// Rotas User
const UserController = require('./controllers/UserController')
routes.post('/user/login', UserController.login)
routes.get('/user/list', middlewareauthAdmin, UserController.list)
routes.get('/user/detail/:id', middlewareauthAdmin, UserController.detail)
routes.post('/user/create', UserController.register)
routes.put('/user/update/:id', middlewareauthAdmin, UserController.update)
routes.delete('/user/destroy/:id', middlewareauthAdmin, UserController.destroy)



// Rotas Cliente
const ClienteController = require('./controllers/ClienteController')
routes.get('/cliente/list', middlewareauthFunc, ClienteController.list)
routes.post('/cliente/create', middlewareauthFunc, ClienteController.store)
routes.get('/cliente/detail/:id', middlewareauthFunc, ClienteController.detail)
routes.put('/cliente/change/:id', middlewareauthFunc, ClienteController.update)
routes.delete('/cliente/remove/:id', middlewareauthFunc, ClienteController.destroy)




// Rotas Vendas
const VendaController = require('./controllers/VendaController')
routes.get('/venda/list', middlewareauthFunc, VendaController.list)
routes.post('/venda/create', middlewareauthFunc, VendaController.store)
routes.get('/venda/detail/:id', middlewareauthFunc, VendaController.detail)
routes.put('/venda/change/:id', middlewareauthFunc, VendaController.update)
routes.delete('/venda/remove/:id', middlewareauthFunc, VendaController.destroy)


module.exports = routes