const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const env = require('../config/env')
// Chamando model
require('../models/User')
const User = mongoose.model('User')


function generateToken(params = {}){
    return jwt.sign(params, env.secret, {
        expiresIn: 1800
    })
}

module.exports = {

    async login(req, res) {
        const { email, password } = req.body    
        console.log(req.body)
        const user = await User.findOne({ email }).select('+password') //campos definidos como select nao exibem exceto se voce especificar com .select('campo')
        console.log(user)
        if (!user){
            return res.status(400).send({
                'dados': null, 
                'message': 'Invalid User or Password',
                'session': null
            })
        }
            user.password = undefined //nao exibe a senha

        res.send({
            message: 'Sucess Login!',
            session: {
                logged: true,
                id: user.id,
                email: user.email,
                tipo: user.tipo,
                details: null,
                token: generateToken({ id:user.id, nome:user.nome, email: user.email, tipo: user.tipo })
            }
         })
           
      },


      async list(req, res) {
        try {
        const users = await User.find()
        res.json({ 
            'dados': users,
            'session': req.session,
            'message': 'sucess'
         })
        } catch (err){
            return res.status(400).send({
                'dados': null, 
                'message': 'Nao foi possivel listar usuarios',
                'session': req.session
            })
        }
           
      },

      async detail(req, res) {
            try {
                const UserDetails= await User.findById(req.params.id)
            
                return res.json({
                    'dados': UserDetails,
                    'session': req.session,
                    'message': 'Sucess!'
                })
            }catch (err) { 
                return res.status(400).send({
                    'dados': null, 
                    'message': 'Nao foi possivel carregar dados para esse usuario',
                    'session': req.session
                })
            }
      },    

    async register(req, res) {
        const { email } = req.body  
            try {  
                if (await User.findOne({ email }))
                return res.status(400).send({
                    'dados': null, 
                    'message': 'Usuario Ja existe!',
                    'session': req.session
                })
                const registerDetails = await User.create(req.body)
                registerDetails.password = undefined //nao exibe a senha
                return res.json({
                    'dados': registerDetails,
                    'session': req.session,
                    'message': 'Usuario criado com sucesso'
                })
            }catch(err) {
                return res.status(400).send({
                    'dados': null, 
                    'message': 'Nao foi possivel registrar seu usuario',
                    'session': req.session
                })
            }
    },
    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(user)
  },
    async destroy(req, res) {
        try{
              delUserDetails = await User.findByIdAndDelete(req.params.id)
              if(!delUserDetails)
              return res.status(400).send({
                'dados': null, 
                'message': 'Nao existe este usuario na base de dados',
                'session': req.session
            })

              return res.json({
                'dados': delUserDetails,
                'session': req.session,
                'message': 'Usuario deletado com sucesso'
            })
        } catch(err) {
            return res.status(400).send({
                'dados': null, 
                'message': 'Nao foi possivel deletar usuario',
                'session': req.session
            })
        }
         

  }
}
