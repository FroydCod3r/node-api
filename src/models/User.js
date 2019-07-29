const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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

UserSchema.pre('save', async function(next){
      const hash = await bcrypt.hash(this.password, 10)
      this.password = hash;
})

mongoose.model('User', UserSchema);