const UsersService = require('../services/UsersService')

module.exports = class UsersController {
  static async index(request, response) {
    const users = await UsersService.getAll()

    return response.status(200).json(users)
  }

  static async findById(request, response) {
    const user = await UsersService.findById(request.params.id)

    if (!user) {
      return response.status(404).json({
        message: 'User not found'
      })
    }

    return response.status(200).json(user)
  }

  static async create(request, response) {
    const {
      firstName,
      lastName,
      email,
      username
    } = request.body

    try {
      const newUser = await UsersService.save({ firstName, lastName, email, username })

      return response.status(201).json(newUser)
    } catch (error) {
      return response.status(500).json({
        message: 'Error at save user'
      })
    }
  }
}
