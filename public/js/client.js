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
          queryArray.push(item)
        }
      });

      if(queryArray.length > 5) {
        console.log(queryArray);
      }

      // SCHRIJF HIER EEN IF
      //
      // if (item == #javascript && item.length > 5) {
      //  append aan body
      // }

      // const tweetInfo = document.createElement('div');
      // tweetInfo.classList.add('tweet-specifics');
      // tweetInfo.innerHTML = tweetObject;
      // document.body.appendChild(tweetInfo);
    });

    // console.log('hier is de query array', queryArray);

})();
