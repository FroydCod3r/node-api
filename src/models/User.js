const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
      email: {                //coluna
            type: String,
            required: true,   //Obrigatório
            
      },
      password: {          //coluna
            type: String,
            required: true,   //Obrigatório
            select: false // nao vem junto com lista
            
      },
      createdAt: {            //coluna
            type: Date,
            default: Date.now,
      }
});

mongoose.model('User', UserSchema);