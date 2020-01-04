const express = require('express');
const request = require('request');
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const app = express();

// Controllers
const loginRouter = require('./controllers/login');
const tokenRouter = require('./controllers/token');

const whiteList = ['http://localhost:3000', 'http://localhost:3001'];
const corsOptions = {
    origin: true,
    methods: 'GET',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
};

// MiddleWare
dotenv.config();
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => res.send("Hello Worlds"))

app.get('/connect', (req, res) => res.redirect('http://localhost:3000'))

app.use('/api', loginRouter)
app.use('/api', tokenRouter)


app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));