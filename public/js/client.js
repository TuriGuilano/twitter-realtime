//iffy
(function(){
    //define socket.io
    const socket = io.connect();
    //function that listens to the the user and gets the input / button event
    function startProcess() {

      const userInput = document.getElementById('search');
      const triggerSome = document.getElementById('fireEvent');

      triggerSome.addEventListener('click', function() {
        event.preventDefault();

        console.log('val van de input', userInput.value);
        const userQuery = userInput.value;

        // emit userQuery to server
        socket.emit('userQuery', userQuery);

      });
    }

    startProcess();

    socket.on('get users', function(data) {
      console.log('connected: %s sockets connected', connections.length);
    });

    const queryArray = [];
    //append tweets to body
    socket.on('tweet', function (tweet) {

      const tweetObject = tweet.text;
      const seperatedObject = tweetObject.split(" ");
      // console.log(seperatedObject);

      seperatedObject.forEach(function(item, index, array) {
        if(item.charAt(0) == '#') {
          queryArray.push(item);
          // console.log('//////////////', queryArray);
        }
      });

      // var arr = ['ab','pq','mn','ab','mn','ab']
      var objQuery = { };
      for (var i = 0, j = queryArray.length; i < j; i++) {
         objQuery[queryArray[i]] = (objQuery[queryArray[i]] || 0) + 1;
      }

      // console.log(objQuery);

      setInterval(function() {
        for(var key in objQuery) {
          if(objQuery[key] > 5) {
            console.log('jemoeder', key);
            //apppend key met mathrandom qua pixels
          }
        }
      }, 5000);


      // const tweetInfo = document.createElement('div');
      // tweetInfo.classList.add('tweet-specifics');
      // tweetInfo.innerHTML = tweetObject;
      // document.body.appendChild(tweetInfo);
    });
})();
