const { getFirestore } = require('firebase-admin/firestore')
const firebaseApp = require('../firebaseApp')

const usersCollection = getFirestore(firebaseApp).collection('users')

module.exports = class User {
  static async insert(u) {
    const data = await usersCollection.add(u)
    const user = {
      ...u,
      id: data.id
    }

    return user
  }
}
