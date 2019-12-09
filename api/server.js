const express = require('express');
const request = require('request');
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const app = express();

// Controllers
var login = require('./controllers/login')

// MiddleWare
dotenv.config();
app.use(cors());
app.use(cookieParser());

// Routes
app.get('/', (req, res) => res.send("Hello Worlds"))

app.get('/connect', (req, res) => res.redirect('http://localhost:3000'))
// app.use('/login', login)


app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));