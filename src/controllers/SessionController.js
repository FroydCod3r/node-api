const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const env = require('../config/env')
// Chamando model
require('../models/User')
const User = mongoose.model('User')



module.exports = {
    async index(req, res) {
        res.json({
            'session': req.session
        })
      }
}