const express = require('express')
const cookieparser = require('cookie-parser') 
const authRoute = require('./src/routes/auth.routes')

const app = express()
app.use(express.json())
app.use(cookieparser())


app.use('/auth' ,  authRoute)


module.exports = app;