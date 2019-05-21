const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const route = require('./routes/app.routes');
const expressValidator = require('express-validator');
// const http = require('http');
const cors = require('cors')

// create express app
const app = express();

//execute for any type of http request and it wrap the express with validator
app.use(expressValidator());

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static('../Client'));
app.use('/', route)

var server = app.listen(3000, () =>
{
    console.log("server is listening to port 3000")
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() =>
{
    console.log("Successfully connected to the database");
}).catch(err =>
    {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
    })

// define a simple route
app.get('/', (req, res) =>
{
    res.json({"message" : "Welcome to Chat App"})
});
