var express = require('express');
var request = require('request');
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var dotenv = require('dotenv');
dotenv.config();

console.log("here we are")
// Controllers
var login = require('./routes/login')

var app = express();

app.use(express.static(_dirname + '/public'))
    .use(cors())
    .use(cookieParser());

app.use('/login', login)


console.log(`Listening on ${process.env.PORT}`);
app.listen(process.env.PORT)