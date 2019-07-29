const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const User = mongoose.model('User')
module.exports = {
      async login(req, res) {
        const { email, password } = req.body    
        const user = await User.findOne({ email }).select('+password') //campos definidos como select nao exibem exceto se voce especificar com .select('campo')
        
        if (!user)
            return res.status(400).send({'error': 'User Not found'})

        if (!await bcrypt.compare( password, user.password ))
            return res.status(400).send({'error': 'Invalid Password'})

        res.send({ user })
           
      }, 

      async novoUsuario(req, res) {
        const { email } = req.body    
        try{
            if (await User.findOne({ email }))
                res.status(400).send({'error': 'Usuário já esta cadastrado'})
        
            const user = await User.create(req.body)
            return res.send({user})
        }catch(err){
            return res.status(400).send({'erro': 'Registration failed'})
        }

           
      }
      
      

};



