const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

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

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Products', ProductSchema);