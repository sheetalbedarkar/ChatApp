const contuser = require('../controllers/app.controller.js')
const express = require('express')
const router = express.Router();
const authRoute=require('../Authentication/index')

const authuser=require('../routes/Authorization.js')

const chatcon=require('../controllers/chatController.js')

router.post('/register', contuser.register);

router.post('/login',contuser.login);

router.use('/auth',authuser)

router.post('/forgetPassword',contuser.forgetPassword);

router.post('/resetPassword',authRoute.checkToken,contuser.resetPassword);

router.get('/getAllUser',contuser.getAllUser);

//export router to use in our server.js
module.exports = router;