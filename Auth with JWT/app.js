const express = require('express')
const authRoute = require("./src/routes/auth.routes")



const app = express()
app.use(express.json())


app.use('/auth' , authRoute)

module.exports = app;