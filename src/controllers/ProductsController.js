const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Chamando todos os models
requireDir('../../src/models');

const Products = mongoose.model('Products');
console.log('dale')
module.exports = {

      async index(req, res) {
            //const products = await Products.find();
            const { page = 1 } = req.query;
            const products = await Products.paginate( { }, { page: page, limit: 5 } );
            try {
                  return res.json(products);
            } catch (error) {
                  console.log(error.message)
            }
            
      },

      async store(req, res) {
            const createProducts = await Products.create(req.body)
            try {
                  return res.json(createProducts)       
            } catch (error) {
                  console.log(error.message)
            }
             
      },

      async detail(req, res) {
            const detalhes_product = await Products.findById(req.params.id)
            try {
                  return res.json(detalhes_product)
            } catch (error) { 
                  console.log(error.message)
            }
      },

      async update(req, res) {
            const products = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });

            return res.json(products)
      },

      async destroy(req, res) {
            await Products.findByIdAndDelete(req.params.id);

            return res.send('D E L E T A D O')
      }

};



