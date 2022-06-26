// express
const express = require('express')
const app = express()

//firebase
const { initializeApp } = require('firebase/app')

const firebaseConfig = require('../firebaseConfig.json')

const firebaseApp = initializeApp(firebaseConfig)

//routes
const indexRoutes = require('./routes/index.routes')

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use(indexRoutes)

module.exports = { app, firebaseApp }
