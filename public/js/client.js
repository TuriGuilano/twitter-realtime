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

      seperatedObject.forEach(function(item, index, array) {
        if(item.charAt(0) == '#') {
          queryArray.push(item);
        }
      });

      var objQuery = { };
      for (var i = 0, j = queryArray.length; i < j; i++) {
         objQuery[queryArray[i]] = (objQuery[queryArray[i]] || 0) + 1;
      }

      var tempContainer = [];
      var list = document.getElementById('queryList');

      setInterval(function() {
        for(var key in objQuery) {
          if(objQuery[key] > 5) {
            // tempContainer.push(key);
            const specificWord = document.createElement('p');
            const minimum = 1;
            const maximum = 200;

            // const minTwo = 
            // const maxTwo =
            var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            var randomNumberTwo = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

            specificWord.style.paddingTop = randomNumber;
            specificWord.style.paddingLeft = randomNumberTwo;

            specificWord.innerHTML = [key]; //+ objQuery[key];
            console.log('fuckyehhhh', specificWord);
            list.appendChild(specificWord);
          }
        }
      }, 5000);
      //
      // tempContainer.forEach(function(element) {
      //   console.log(element);
      //   const specificWord = document.createElement('li');
      //   specificWord.innerHTML = element;
      //   list.appendChild(specificWord);
      // });
    });
})();
