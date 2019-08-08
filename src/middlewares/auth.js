const jwt = require('jsonwebtoken')
const env = require('../config/env')
module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

    if (! authHeader )
    return res.status(401).send({
        error: 'No token provided',
        auth: false
    })

    const parts = authHeader.split(' ')

    if(! parts.length ==  2)
    return res.status(401).send({
        error: 'token error',
        auth: false
    })

    const [ scheme, token ] = parts

    if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({
        error: 'token malformatted',
        auth: false
    })

    jwt.verify(token, env.secret, ( err, decoded ) => {
        if (err) return res.status(401).send({
            error: 'token invalido',
            auth: false
        })
        
        req.userID = decoded.id
        return next()

    })

}