const mongoose = require('mongoose')
// Chamando model
const Cliente = require('../models/Cliente')


function generateToken(params = {}){
    return jwt.sign(params, env.secret, {
        expiresIn: 1800
    })
}

module.exports = {

  

      async list(req, res) {
        try {
        const clientes = await Cliente.find().populate('users')
        res.json(
            clientes
         )
        } catch (err){
            return res.status(400).send({
                'message': 'Nao foi possivel carregar dados'
            })
        }
           
      },

      async detail(req, res) {
            try {
                const ClienteDetails = await Cliente.findById(req.params.id).populate('user')
            
                return res.json({
                    ClienteDetails
                })
            }catch (err) { 
                return res.status(400).send({
                    'message': 'Nao foi possivel carregar dados para esse cliente' + err,
                })
            }
      },    

    async store(req, res) {
        const { email } = req.body  
            try {
                if (await Cliente.findOne({ email })){
                return res.status(400).send({
                    'message': 'Cliente Ja existe!!!!',
                        })
                    }
                const registerDetails = await Cliente.create(req.body)
                return res.json({
                    'message': 'Cliente criado com sucesso'
                })
            } catch(err) {
                return res.status(400).send({                            
                    'message': `Nao foi possivel registrar seu cliente ${err.message}`,
                })
            }
    },
    async update(req, res) {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(cliente)
  },
    async destroy(req, res) {
        try{
              delClienteDetails = await Cliente.findByIdAndDelete(req.params.id)
              if(!delClienteDetails)
              return res.status(400).send({
               
                'message': 'Nao existe este cliente na base de dados'
                
            })

              return res.json(delClienteDetails)
        } catch(err) {
            return res.status(400).send({
                'message': 'Nao foi possivel deletar cliente',
            })
        }
  }
}
