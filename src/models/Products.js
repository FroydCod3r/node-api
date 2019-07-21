const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
      title: {                //coluna
            type: String,
            required: true,   //Obrigatório 
      },
      description: {          //coluna
            type: String,
            required: true,   //Obrigatório 
      },
      url: {                 //coluna
            type: String,
            required: true,   //Obrigatório 
      },
      createdAt: {            //coluna
            type: Date,
            default: Date.now,
      },
});

mongoose.model('Products', ProductSchema);