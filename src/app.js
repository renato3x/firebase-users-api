// express
const express = require('express')
const app = express()

//routes
const indexRoutes = require('./routes/index.routes')
const usersRoutes = require('./routes/users.routes')

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use(indexRoutes)
app.use(usersRoutes)

module.exports = app
