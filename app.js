const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');
const router = require('./routes/router');
const dotenv = require('dotenv').config();
const Twitter = require('twitter');

const testUrl = process.env.TESTURL;
const urlSingle = process.env.URLSINGLE;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', router);
app.use(express.static('public'));

//credentials twitter api
twitterConsumerKey = process.env.twitterConsumerKey;
twitterConsumerSecret = process.env.twitterConsumerSecret;
accesstoken = process.env.accesstoken;
accesstokensecret = process.env.accesstokensecret;

const client = new Twitter({
    consumer_key: twitterConsumerKey,
    consumer_secret: twitterConsumerSecret,
    access_token_key: accesstoken,
    access_token_secret: accesstokensecret
});

io.sockets.on('connection', function(socket){
  socket.on('userQuery', function(value) {
    client.stream('statuses/filter', {track: value},  function(stream) {
       stream.on('data', function(tweet) {
           io.emit('tweet', tweet);
       });
       stream.on('error', function(error) {
           console.log(error);
       });
    });
  })
});

server.listen(process.env.PORT || 8888);
console.log('server is running on port 8888');
