const express = require('express')
const UserController = require('../controller/user.controller')
 
const router = express.Router()
 
router.get('/', UserController.list)
router.get('/:id', UserController.getByld)
router.post('/', UserController.create)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.remove)
 
module.exports = router