var express = require('express');
var router = express.Router();
var users = require('../controllers/app.controller.js');

var chatController = require("../controllers/chatController")
var auth = require('../Authentication/index.js');
 try{
    router.get('/getAllUser',users.getAllUser);
    router.get('/getUserMsg',chatController.getUserMsg);
}

catch(err)
{
    console.log("ERROR : in authorization");
}

module.exports =router
