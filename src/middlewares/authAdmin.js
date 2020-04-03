const jwt = require('jsonwebtoken')
const env = require('../config/env')
module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

     if (! authHeader )
     return res.status(401).send({
        message: 'mal formatado'
     })

     const parts = authHeader.split(' ')

     if(! parts.length ==  2)
     return res.status(401).send({
        message: 'mal formatado'
    })

     const [ scheme, token ] = parts

     if (!/^Bearer$/i.test(scheme))
     return res.status(401).send({
        message: 'mal formatado'
     })

    jwt.verify(token, env.secret, ( err, decoded ) => {
        if (err) return res.status(401).send({
            message: 'session expirada'
        })

        if(decoded.tipo != 'admin') return res.status(401).send({
            message: 'sem privilegios'
        })


        req.token = {
            token: token
        }
        return next()

    })

}