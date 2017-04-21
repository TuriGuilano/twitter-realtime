const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');
const router = require('./routes/router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', router);
app.use(express.static('public'));

const Twitter = require('twitter');

//credentials twitter api
const twitterConsumerKey = "sApa7Tgmj2qwFhTtYVOufHo96";
const twitterConsumerSecret = "RNRaFY1LEUTgT8Y9PF1oHmuHN5Ugih15aHxn3Gdb0pmF8HakPJ";
const access_token = '2214014072-1LTEGnQIJkozwh39dZwxewvCg7WyixoqbUubl9o';
const access_token_secret = 'yOem5zbUCJNMffBXNSNVTpPD6hrbsYKC2tLl6nNoieTZq';

//oauth setup

// const oauth_token = '';
// const oauth = 'https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}';


const client = new Twitter({
    consumer_key: twitterConsumerKey,
    consumer_secret: twitterConsumerSecret,
    access_token_key: access_token,
    access_token_secret: access_token_secret
});



io.sockets.on('connection', function(socket){
  socket.on('userQuery', function(value) {
    console.log(value);
  })
});

// emit setup -> sends stream to client
client.stream('statuses/filter', {track: 'javascript'},  function(stream) {
   stream.on('data', function(tweet) {
    //  console.log(tweet.text);
       io.emit('tweet', tweet);
   });

   stream.on('error', function(error) {
       console.log(error);
   });
});

server.listen(process.env.PORT || 8888);
console.log('server is running on');
