
const express = require('express');
const request = require('request');
const querystring = require('querystring');
const dotenv = require('dotenv');
const token = express.Router();
const UI_URL = 'http://localhost:3000';
const spotifyAppCreds = require('../credentials');
dotenv.config();

token.get('/callback', function (req, res){

    // your application requests refresh and access tokens
    // after checking the state parameter
  
    console.log("api/callback .... calling back in");
  
    var code = req.query.code || null;
    var data = {};
  
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: spotifyAppCreds.redirect_uri
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(spotifyAppCreds.client_id + ':' + spotifyAppCreds.client_secret).toString('base64'))
        },
        json: true
    };
  
    request.post(authOptions, function(error, response, body) {
        if (!error && res.statusCode === 200) res.redirect('http://localhost:3000')
    })
}),

token.get('/me', function(error, response, body) {
        
        if (!error && res.statusCode === 200) {
  
          var access_token = body.access_token,
              refresh_token = body.refresh_token;
  
          var options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { 'Authorization': 'Bearer ' + access_token },
            json: true
          };
  
          // use the access token to access the Spotify Web API
          request.get(options, function(error, response, body) {
            console.log("GOT A RESPONSE!");
            console.log(body);
            data = body;

            // we can also pass the token to the browser to make requests from there
            res.status(200).json({
              access_token: access_token,
              refresh_token: refresh_token,
              data
            });
          });
          
        } else {
          res.redirect('/#' +
            querystring.stringify({
              error: 'invalid_token'
            }));
        }
});

  module.exports = token;