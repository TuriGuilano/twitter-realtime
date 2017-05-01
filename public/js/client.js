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

    //append tweets to body
    socket.on('tweet', function (tweet) {
      const tweetObject = tweet.text;
      const tweetInfo = document.createElement('div');

      tweetInfo.classList.add('tweet-specifics');
      tweetInfo.innerHTML = tweetObject;
      
      document.body.appendChild(tweetInfo);
    });
})();
