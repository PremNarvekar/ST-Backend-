require('dotenv').config()

const app = require('./app')
const ConnectTODB = require('./src/db/db')




ConnectTODB()

app.listen(3000 , ()=>{
    console.log('Server is started')
})