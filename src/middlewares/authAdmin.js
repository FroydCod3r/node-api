const jwt = require('jsonwebtoken')
const env = require('../config/env')
module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

     if (! authHeader )
     return res.status(401).send({
        session: {
            logged: false,
            id: null,
            nome: null,
            email: null,
            id: null,
            tipo: null,
            details: null,
            token: null
        }
    })

     const parts = authHeader.split(' ')

     if(! parts.length ==  2)
     return res.status(401).send({
        session: {
            logged: false,
            id: null,
            nome: null,
            email: null,
            id: null,
            tipo: null,
            details: null,
            token: null
        }
    })

     const [ scheme, token ] = parts

     if (!/^Bearer$/i.test(scheme))
     return res.status(401).send({
        session: {
            logged: false,
            id: null,
            nome: null,
            email: null,
            id: null,
            tipo: null,
            details: err,
            token: null
        }
     })

    jwt.verify(token, env.secret, ( err, decoded ) => {
        if (err) return res.status(401).send({
            session: {
                logged: false,
                id: null,
                nome: null,
                email: null,
                id: null,
                tipo: null,
                details: err,
                token: null
            }
        })

        if(decoded.tipo != 'admin') return res.status(401).send({
            session: {
                logged: true,
                id: decoded.id,
                nome: decoded.nome,
                email: decoded.email,
                tipo: decoded.tipo,
                details: {
                    name: 'PrivError',
                    message: 'Sem privilegios para fazer essa acao',
                },
                token: token
            }
        })
        req.session = {
            logged: true,
            id: decoded.id,
            email: decoded.email,
            nome: decoded.nome,
            tipo: decoded.tipo,
            details: null,
            token: token
        }
        return next()

    })

}