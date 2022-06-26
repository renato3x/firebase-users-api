const User = require('../firebase/models/User')

module.exports = class UsersService {
  async save(user) {
    const newUser = new User(...user)

    return await newUser.save()
  }
}
