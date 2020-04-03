const app = require('./app')
const envConfig = require('./config/env')

app.listen(envConfig.port, function () {
    console.log('Ready')
  })