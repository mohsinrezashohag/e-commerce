const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controllers');


router.route('/sign-up').post(userControllers.userSignUp)
router.route('/sign-in').post(userControllers.userSignIn)

module.exports = router