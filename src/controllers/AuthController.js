const mongoose = require('mongoose')
const requireDir = require('require-dir')
const bcrypt = require('bcryptjs')

// Chamando todos os models
requireDir('../../src/models')

const Products = mongoose.model('Products')
module.exports = {

      async login(req, res) {
        const { email, password } = req.body    
        const user = await User.findOne({ email }).select('+password') //campos definidos como select nao exibem exceto se voce especificar com .select('campo')
        
        if (!user)
            return res.status(400).send({'error': 'User Not found'})

        if (!await bcrypt.compare( password, user.password ))
            return res.status(400).send({'error': 'Invalid Password'})

        res.send({ user })


           
      } 

};



