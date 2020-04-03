const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
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
      password: {          //coluna
            type: String,
            required: true,   //Obrigatório
            select: false // nao vem junto com lista
            
      },
      tipo: {
            type: String,
            required: true
      },
      createdAt: {            //coluna
            type: Date,
            default: Date.now,
      }
});

UserSchema.pre('save', async function(next){
      const hash = await bcrypt.hash(this.password, 10)
      this.password = hash;
})
UserSchema.pre('update', async function(next){
      const hash = await bcrypt.hash(this.password, 10)
      this.password = hash;
})

module.exports = mongoose.model('User', UserSchema);