module.exports = class IndexController {
  static index(_, response) {
    return response.status(200).json({
      serverPort: process.env.PORT
    })
  }
}
