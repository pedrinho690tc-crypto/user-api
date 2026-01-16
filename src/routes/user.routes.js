const express = require('express')
const UserController = require('../controller/user.controller')
 
const router = express.Router()
 
router.get('/', UserController.list)
router.get('/:id', UserController.getByld)
router.post('/', UserController.create)
 
 
module.exports = router