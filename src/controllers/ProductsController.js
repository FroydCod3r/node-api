const mongoose = require('mongoose');
const requireDir = require('require-dir');

requireDir('../models');
const Products = mongoose.model('Products');

module.exports = {
      async index(req, res) {
            const products = await Products.find();

            return res.json(products)
      },
};