const jwt = require('jsonwebtoken')
const envConfig = require('../config/env')
module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

     if (! authHeader )
     return res.status(401).send({
        session: {
            message: 'mal formatado'
        }
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

    jwt.verify(token, envConfig.secret , ( err, decoded ) => {
        if (err) return res.status(401).send({
            message: 'mal formatado'
        })

        if(decoded.tipo != 'admin' && decoded.tipo != 'funcionario') return res.status(401).send({
            message: 'sem privilegios'
        })

        req.session = {
            token: token
        }
        return next()

    })

}