const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate')
const VendasSchema = new mongoose.Schema({
      cliente_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Cliente'
      },
      user_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
      },
      passage_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Passagem'
      },
      createdAt: {            //coluna
            type: Date,
            default: Date.now,
      }
});
//ProductSchema.plugin(mongoosePaginate)
mongoose.model('Venda', VendasSchema);