const mongoose = require("mongoose");
var bcrypt = require('bcrypt')
var salt = 10;


//create instance of schema
var mongoschema = mongoose.Schema
var userSchema = new mongoschema({
    "name": { type: String, required: [true, "name is required"] },
    "email": { type: String, required: [true, "email is required"] },
    "password": { type: String, required: [true, "password is required"] },
},{ versionKey: '_somethingElse' },
// new Schema({..}, { versionKey: '_somethingElse' })
    {
        timestamp: true
    });
function usermodel() {

}
var user = mongoose.model('user', userSchema);

function hash(password) {
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}

usermodel.prototype.register = (body, callback) => {
    user.find({ 'email': body.email }, (err, data) => {
        if (err) {
            console.log("error in register schema");

            return callback(err);
        }
        else if (data.length > 0) {

            response = { "error": true, "message": "Email already exists ", "errorCode": 404 };

            return callback(response);
        } else {
           body.password = bcrypt.hashSync(body.password,salt)
            const newUser = new user({

                "name": body.name,
                "email": body.email,
                "password": body.password

            });
           
            
            newUser.save((err, result) => {

                if (err) {
                    console.log("error came");
                    console.log("error in model file", err);
                    return callback(err);
                }
                else {
                    console.log(body.name);
                    console.log("in model")
                    console.log("data save successfully", result);
                    console.log("registered successfully");
                    callback(null, result);
                    console.log("no return statements ..registered successfully");
                }
            })

        }
    });
}
usermodel.prototype.login = (body, callback) => {   
    user.find({ "email": body.email }, (err, data) => 
    {
        if (err) 
        {
            return callback(err);
        } 
        else if (data.length > 0) 
        {
            bcrypt.compare(body.password, data[0].password, (err, res) => { if (err) {
                return callback(err);
            } 
            
            else if (res) 
            {
                //console.log(body.email)
                console.log(data);
                console.log("login successfully......!");
                return callback(null, data);
            }
            else 
            {
               
                console.log("incorrect password please check it once ");
                return callback("Incorrect password").status(500);
            }
        });
    }
    else 
    {
        console.log(body.username);
        console.log(body.password);
        console.log("username is not in database please check it.")
        return callback("Invalid User");
    }
});
}

usermodel.prototype.forgetPassword=(data,callback)=>{
    user.findOne({"email":data.email},(err,result)=>{
        if(err) {
            callback(err);
        }
        else {
            if(result!==null && data.email==result.email) {
                callback(null,result);
            }
            else {
                callback("inncorrect mail")
            }
        }
    })
}
usermodel.prototype.updateUserPassword=(req,callback)=> {
    console.log('in model--data:--',req.decoded);
    console.log('in model--body:--',req.body);

    let newpassword=bcrypt.hashSync(req.body.password,salt);
    console.log(('new pass bcrypt--',newpassword));
    user.updateOne({ _id:req.decoded.payload.user_id},{$set: {password:newpassword}},(err,result)=>{
        if(err) {
            callback(err);
        }
        else {
            callback(null,result);
        }  
    })   
}

usermodel.prototype.getAllUser = (req, callback) => {
    user.find({}, (err, data) => {
        if (err) {
            callback("error is in model" + err)
        } else {
            callback(null, data);
        }
    })
}
module.exports = new usermodel();