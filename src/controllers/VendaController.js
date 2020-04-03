const mongoose = require('mongoose');
// Chamando model
const Venda = require('../models/Venda')
module.exports = {

      async list(req, res) {

            //const products = await Products.find();
            const { page = 1 } = req.query;
            const venda = await Venda.find();
            try {
                  return res.json(vendas);
            } catch (error) {
                  console.log(error.message)
            }
            
      },

      async store(req, res) {
            const createVenda = await Venda.create(req.body)
            try {
                  return res.json(createVenda)       
            } catch (error) {
                  console.log(error.message)
            }
             
      },

      async detail(req, res) {
            const detalhes_venda= await Venda.findById(req.params.id)
            try {
                  return res.json(detalhes_venda)
            } catch (error) { 
                  console.log(error.message)
            }
      },
      async update(req, res) {
            const products = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });

            return res.json(products)
      },

      async destroy(req, res) {
            await Vendas.findByIdAndDelete(req.params.id);
            return res.send('D E L E T A D O')
      }

};



