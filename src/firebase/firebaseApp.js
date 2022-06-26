const { initializeApp } = require('firebase-admin/app')
const admin = require('firebase-admin')
const firebaseConfig = require('../../firebaseConfig.json')

const firebaseApp = initializeApp({
  credential: admin.credential.cert(firebaseConfig)
})

module.exports = firebaseApp
