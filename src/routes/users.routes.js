const { Router } = require('express')
const router = Router()

const UsersController = require('../controllers/UsersController')

router.get('/users', UsersController.index)
router.get('/users/:id', UsersController.findById)
router.post('/users', UsersController.create)

module.exports = router
