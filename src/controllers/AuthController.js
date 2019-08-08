const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const env = require('../config/env')
// Chamando model
require('../models/User')
const User = mongoose.model('User')




function generateToken(params = {}){
    return jwt.sign(params, env.secret, {
        expiresIn: 8000000
    })
}


module.exports = {

      async login(req, res) {
        const { email, password } = req.body    
        const user = await User.findOne({ email }).select('+password') //campos definidos como select nao exibem exceto se voce especificar com .select('campo')
        
        if (!user)
            return res.status(400).send({'error': 'User Not found'})

        if (!await bcrypt.compare( password, user.password ))
            return res.status(400).send({'error': 'Invalid Password'})
            user.password = undefined //nao exibe a senha

        res.send({ 
            user, 
            token: generateToken({ id:user.id })
         })
           
      }, 

      async register(req, res) {
        const { email } = req.body    
        try{
            if (await User.findOne({ email }))
                return res.status(400).send({error: 'Usuário já esta cadastrado'})
        
            const user = await User.create(req.body)
            user.password = undefined //nao exibe a senha

            return res.send({
                user, 
                token: generateToken({ id:user.id })
            })

        }catch(err){
            return res.status(400).send({'erro': 'Registration failed'})
        }
      }
};



