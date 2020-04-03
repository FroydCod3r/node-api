const express = require('express')
const mongoose = require('mongoose')
const envConfig = require('./config/env')
const { errors } = require('celebrate')
// const requireDir = require('require-dir');
const cors = require('cors')
// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())
// Iniciando DB
mongoose.connect(envConfig.databaseURL, { useNewUrlParser: true })
// Routes execute
app.use('/', require('../src/routes'))


app.use(errors())

module.exports = app