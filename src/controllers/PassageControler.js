const mongoose = require('mongoose');
const requireDir = require('require-dir');


// Chamando model
require('../models/Venda')

const Passage = mongoose.model('Passage');
module.exports = {

      async list(req, res) {
            const passage = await Passage.find();
            try {
                  return res.json(passage);
            } catch (error) {
                  console.log(error.message)
            }
            
      },

      async store(req, res) {
            const createPassage = await Venda.Passage(req.body)
            try {
                  return res.json(createPassage)       
            } catch (error) {
                  console.log(error.message)
            }
             
      }

};



