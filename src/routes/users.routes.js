const { Router } = require('express')
const router = Router()

const UsersController = require('../controllers/UsersController')

router.get('/users', UsersController.index)
router.post('/users', UsersController.create)

module.exports = router
