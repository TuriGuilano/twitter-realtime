# Twitter Brainstorm tool FTW

<img width="1167" alt="screen shot 2017-05-04 at 09 03 53" src="https://cloud.githubusercontent.com/assets/11157347/25693299/bade00d6-30a8-11e7-8e32-48d169cb421b.png">

> Project description

For the  course Realtime web I created a realtime twitter stream working on Node.js with an express server and socket.io
I created a realtime app that allows you to enter a search query which will respond with related tweets.

First off the app is build in Node.js. Uses a express server and requires socket.io for realtime connections. I also require a twitter package and the stream function to display all the random tweets. So here an overview of all the tools I used:

* [ ] Atom code editor
* [ ] NodeJS
* [ ] Express
* [ ] Socket.io
* [ ] Twitter
* [ ] EJS
* [ ] Now for deployment

> Process

This project required a lot of research and trial & error. At first the idea of an external API || Server || Client was absract to me. Where does the data live? How is the connection established and how do I transfer the data from the server to the client based on user input. I have learned a lot during this course and got a better understanding of what real time web means.

> Results

The results are pretty cool. I came up with the idea (thanks to my buddy @Zishrodrigues aswell for brainstorming with me) to create a realtime brainstorm tool. You type in the word and based on related hashtags you get a personalized word cloud. This may come in handy for big projects where in the beginning state you need to brainstorm on relative subjects. 

> Features

What's all the bells and whistles this project can perform?

This app allows the user to see fill in query, the query is stored and emitted to the server where it talks to the twitter stream module. Serverside the stream is being filtered on the given query and sends it back to the client. Client side we filter all the tweets on their hashtags. The hashtags on their turn are being stored. If they occure more than five times, we append the hashtag to the body.

> Tunnel event

I wrote a function that checks if the user is connected or not every X seconds. If the user is disconnected he gets feedback due to an alarm message.


> Excistense of the data

After we connected to the Twitter stream API we have the data available. The data is being emitted from the server to the client. Clientside the data is being stored in an array. There is a socket connection that creates a continuous pipeline with the twitter stream API. So the data is available at all times.

> Vision & Goal

My app is called the Twitter brainstorm tool. The TBT helps you with creative brainstorm sessions.
We all know how hard it can be to be creative. When you get the assignment 'Brainstorm for words that have affection to your subject in some sort of way'

I build this app based on a specific goal and that is to get related words that have something to do with you search word and display these words in a word cloud. The words will only appear in the cloud if it is called more than five times. This way you dont get every word that is in every tweet, but only the words that come back multiple times. 

This helps you get accurate topics that are related to your search query.

> Use case

Lets say for a project on healthy food you need to have a brainstorm session and come up with words that are relevant to your topic. You go to my TBT app and fill in the word healthyfood. Every tweet that includes this word will be saved in an array. The tweet which includes the word healthyfood will seperate all the words and store these. 

The next tweet that follows with the word healtyfood in it will also be stored. Now a function jumps in which checks if there are any matching words in these two tweets. If there are, the function sets a counter. If the counter comes above 'five' the word gets appended to the cloud and will be displayed in the browser. This way the user gets a custom brainstorm session with related words to his or her topic. 

Enjoy your life.


## Installing / Getting started

A quick introduction of the minimal setup you need to get something on you screen (no dinosaur).

```shell
git clone https://github.com/TuriGuilano/twitter-realtime
cd repository

npm install --save

npm start
```

By following these steps you install all the packages that are required in this project.
The npm start command is a command that runs a script in the package.json file which simply starts our app.


## Contributing

Feel free to help me with this project or add some new epic features!
The project is opensource!


## Wishlist

* [ ] Adding useful D3 actions to make a awesome data visualization

> live link:

https://twitter-realtime-jcrwbmyays.now.sh



# Week1 Realtime-web

> For this assigment we worked with  socket.io to establish a realtime connection that enables users to create
a username and chat to eachother. It is possible to open several hosts. In other words its possible to open multiple
connections so multiple users can communicate with eachother.

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
git clone https://github.com/TuriGuilano/realtime-web/tree/master/week1
cd repository

npm install --save
npm install socket.io --save

npm start
```

By following these steps you install all the packages that are required in this project.
The npm start command is a command that runs a script in the package.json file which simply starts our app.


## Features

What's all the bells and whistles this project can perform?

* User can create username
* Chat with friends or other human beings?!
* Multiple users possible!
* Show icon under username!


## Contributing

Feel free to help me with this project or add some new epic features!


## Wishlist

* [ ] Add mongoDB
* [ ] Create login with password
* [ ] Use d3.js for awesome data visuals


## Live preview
NOW:
https://week1-ybowatygpg.now.sh/

Heroku:
https://chat-rt-cmd.herokuapp.com/


## Licensing

"The code in this project is licensed under MIT license."





