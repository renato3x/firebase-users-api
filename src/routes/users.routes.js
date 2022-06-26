const { Router } = require('express')
const router = Router()
const multer = require('multer')()

const UsersController = require('../controllers/UsersController')

router.get('/users', UsersController.index)
router.get('/users/:id', UsersController.findById)
router.post('/users', multer.single('profile'), UsersController.create)

module.exports = router
