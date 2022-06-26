const { initializeApp } = require('firebase-admin/app')
const firebaseConfig = require('../../firebaseConfig.json')

const firebaseApp = initializeApp(firebaseConfig)

module.exports = firebaseApp
