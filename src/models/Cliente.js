const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate')
const ClienteSchema = new mongoose.Schema({
    nome: {                //coluna
        type: String,
        required: true,   //Obrigatório        
    },
    email: {                //coluna
        type: String,
        required: true,   //Obrigatório        
    },
    telefone: {
        type: String,
        required: true
  },
    createdAt: {            //coluna
        type: Date,
        default: Date.now,
    },
    user:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }]
    });
//ProductSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Cliente', ClienteSchema);