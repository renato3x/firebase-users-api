const UsersService = require('../services/UsersService')
const { request: req, response: res } = require('express')

module.exports = class UsersController {
  static async index(_ = req, response = res) {
    const users = await UsersService.getAll()

    return response.status(200).json(users)
  }

  static async findById(request = req, response = res) {
    const user = await UsersService.findById(request.params.id)

    if (!user) {
      return response.status(404).json({
        message: 'User not found'
      })
    }

    return response.status(200).json(user)
  }

  static async create(request = req, response = res) {
    const {
      firstName,
      lastName,
      email,
      username
    } = request.body

    console.log(request.file)

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
