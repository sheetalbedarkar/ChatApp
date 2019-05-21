var express = require('express');

var router = express.Router();
var users = require('../controllers/app.controller.js');
var auth = require('../Authentication/index.js');

 try{
    router.get('/getAllUser',users.getAllUser);
    console.log("Authrization")
}

catch(err)
{
    console.log("ERROR : in authorization");
}

module.exports =router