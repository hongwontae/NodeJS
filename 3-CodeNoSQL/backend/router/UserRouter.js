const express = require('express');

const UserController = require('../controller/UserController')

const router = express.Router();

router.post('/signup', UserController.postUser);
router.post('/login', UserController.loginUser);


module.exports = router;