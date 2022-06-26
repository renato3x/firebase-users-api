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

  static async getAll() {
    const users = (await usersCollection.get())

    return users.docs.map(this.render)
  }

  static render(doc) {
    const fieldsProto = doc._fieldsProto

    return Object.keys(fieldsProto).reduce((object, key) => {
      object[key] = fieldsProto[key].stringValue

      return object
    }, {  })
  }

  static async findById(id) {
    const user = await usersCollection.where('uid', '==', id).get()

    return user.docs.map(this.render)[0]
  }
}
