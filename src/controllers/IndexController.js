module.exports = class IndexController {
  static index(request, response) {
    return response.status(200).json({
      serverPort: process.env.PORT
    })
  }
}
