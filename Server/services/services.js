
var userModel = require('../models/app.model');
//Register purpose


exports.register = (req, callback) => {
        userModel.register(req, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                console.log("services")
                return callback(null, data);
            }
        })
    }
    //Login purpose
exports.login = (req, callback) => {
        userModel.login(req, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }
//forget purpose
    exports.forgetPassword=(data,callback)=>{
        userModel.forgetPassword(data,(err,result)=>{
            if(err){
                callback(err);
            }else {
                callback(null,result)
                console.log("services")
            }
        })
    }

    //reset purpose
    exports.resetPass=(req,callback)=>{
        userModel.updateUserPassword(req,(err,result)=>{
            if(err){
                callback(err);
            }else {
                callback(null,result)
            }
        })
    } 
   
exports.getAllUser = (req, callback) => {
    userModel.getAllUser(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}
