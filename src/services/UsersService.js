const User = require('../firebase/models/User')

module.exports = class UsersService {
  static async save(user) {
    return await User.insert(user)
  }
}
