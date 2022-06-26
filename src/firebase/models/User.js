const { getFirestore } = require('firebase-admin/firestore')
const firebaseApp = require('../firebaseApp')
const { v4: uid } = require('uuid')

const usersCollection = getFirestore(firebaseApp).collection('users')

module.exports = class User {
  static async insert(u) {
    const user = {
      uid: uid(),
      ...u
    }
    
    await usersCollection.add(user)

    return user
  }
}
