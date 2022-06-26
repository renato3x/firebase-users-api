const { Router } = require('express')
const router = Router()

const IndexController = require('../controllers/IndexController')

router.get('/', IndexController.index)

module.exports = router
