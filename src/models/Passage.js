const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate')
const VendasSchema = new mongoose.Schema({
    venda_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Venda'
    },    
    localizador_passage: {
        type: String, 
        ref: true
    },
    companhia_passage: {
        type: String, 
        ref: true
    },
    origem_passage: {
        type: String, 
        required: true
    },
    destino_passage: {
        type: String, 
        required: true
    },
    embarque_passage: {
            type: Date, 
            required: true
    },
    data_venda_passage: {            //coluna
            type: Date,
            default: Date.now,
    }
});
//ProductSchema.plugin(mongoosePaginate)
mongoose.model('Passage', VendasSchema);