const jwt = require('jsonwebtoken')
const env = require('../config/env')
module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

    if (! authHeader )
    return res.status(401).send({error: 'No token provided'})

    const parts = authHeader.split(' ')

    if(! parts.length ==  2)
    return res.status(401).send({error: 'token error'})

    const [ scheme, token ] = parts

    if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({error: 'token malformatted'})

    jwt.verify(token, env.secret, ( err, decoded ) => {
        if (err) return res.status(401).send({error: 'token invalido'})
        
        req.userID = decoded.id
        return next()

    })

}