const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');
const router = require('./routes/router');
const request = require('request');
const btoa = require('btoa');
const linter = require('linter');
const OAuth = require('oauth');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', router);
app.use(express.static('public'));

const OAuth2 = OAuth.OAuth2;
const twitterConsumerKey = 'sApa7Tgmj2qwFhTtYVOufHo96';
const twitterConsumerSecret = 'RNRaFY1LEUTgT8Y9PF1oHmuHN5Ugih15aHxn3Gdb0pmF8HakPJ';
const oauth2 = new OAuth2(
  twitterConsumerKey,
  twitterConsumerSecret,
  'https://api.twitter.com/',
  null,
  'oauth2/token',
  null);

oauth2.getOAuthAccessToken(
  '',
  {'grant_type':'client_credentials'},
  function (e, access_token, refresh_token, results){
    console.log('bearer: ',access_token);
    oauth2.get('protected url',
    access_token, function(e,data,res) {
      if (e) return callback(e, null);
      if (res.statusCode!=200)
        return callback(new Error(
          'OAuth2 request failed: '+
          res.statusCode),null);
      try {
        data = JSON.parse(data);
      }
      catch (e){
        return callback(e, null);
      }
      return callback(e, data);
    });
  });

server.listen(process.env.PORT || 8888);
console.log('server is running on');
