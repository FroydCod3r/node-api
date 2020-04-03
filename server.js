const express = require('express')
const mongoose = require('mongoose')
// const requireDir = require('require-dir');
const cors = require('cors')
// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())
// Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
// Routes execute
app.use('/', require('./src/routes'))
// listen
app.listen(3301, function () {
    console.log('Ready')
  })