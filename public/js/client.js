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

    socket.on('error', function(error) {
      console.log('error', error);
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
            addWord(key);
          }
        }
      }, 1000);

      function addWord(key) {
        var lijst = list.children;
        var index = -1;

        while(key.charAt(0) === '#')
          {
            key = key.substr(1);
          }

        while (++index < lijst.length) {
          if (lijst[index].textContent === key) {
            return;
          }
        }

        const minTop = 1;
        const maxTop = 400;

        const minLeft = 25;
        const maxLeft = 1000;

        var randomNumber = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
        var randomNumberTwo = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;


        const specificWord = document.createElement('p');
        specificWord.classList.add('absolute');
        //click event adden en nieuwe query uitvoeren
        specificWord.style.top = randomNumber;
        specificWord.style.left = randomNumberTwo;
        specificWord.innerHTML = key;

        list.appendChild(specificWord);
      }
      // list.appendChild(specificWord);
    });

    setInterval(function() {
      if (navigator.onLine) {
        console.log('online');
      } else {
        const msgMsg = 'You are currently offline...';
        const alertSome = document.createElement('p');
        alertSome.classList.add('alertWord');
        alertSome.innerHTML = msgMsg;
        document.body.appendChild(alertSome);
        // alert('We are currently offline!');
      }
    }, 5000);

})();
