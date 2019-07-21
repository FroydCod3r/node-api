//REQUIRES
const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true});

// Rotas
app.get('/', (req,res) => {
      res.send('MONGO ON')
});

app.listen(3301);