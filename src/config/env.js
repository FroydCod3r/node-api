
const env = process.env.NODE_ENV

let envConfig = {
    'databaseURL': 'mongodb://localhost:27017/nodeapi',
    'secret': 'xreyisthebest',
    'port': '3000'
}
if(env === 'prod'){
    let envConfig = {
        'databaseURL': 'mongodb://localhost:27017/nodeapi',
        'secret': 'xreyisthebest',
        'port': '3000'
    }
    console.log('prod')
}

if(env === 'test'){
    let envConfig = {
        'databaseURL': 'mongodb://localhost:27017/nodeapi',
        'secret': 'xreyisthebest',
        'port': '3000'
    }
    console.log('test')
} 

if(env === 'dev'){
    console.log('dev')
} 


module.exports = envConfig