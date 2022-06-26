const { getFirestore, Timestamp } = require('firebase-admin/firestore')
const firebaseApp = require('../firebaseApp')

const usersCollection = getFirestore(firebaseApp).collection('users')

module.exports = class User {
  constructor(
    firstName,
    lastName,
    username,
    email,
    username
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.username = username;
    this.createdAt = Timestamp.fromMillis();
    this.updatedAt = Timestamp.fromMillis();
  }

  async save() {
    const data = await usersCollection.add(this.generate())

    return data
  }

  generate() {
    const user = { ...this }

    delete user.save
    delete user.generate

    return user
  }
}
