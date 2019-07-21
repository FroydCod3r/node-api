//REQUIRES GLOBAIS
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true});

// Requires e objetos das models
//requireDir('./src/models');

//const Products = mongoose.model('Products')


//Routes execute
app.use('/api', require('./src/routes'));

//listen
app.listen(3301);