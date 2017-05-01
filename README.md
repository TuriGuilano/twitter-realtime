# Twitter Brainstorm tool FTW

> Project description

For the  course Realtime web I created a realtime twitter stream working on Node.js with an express server and socket.io

I created a realtime app that allows you to enter a search query which will respond with related tweets.
This sounds pretty simple but I had a hard time figuring everything out. Besides that, under the surface happen a couple of actions.

First off the app is build in Node.js. Uses a express server and socket.io for realtime connections. I also require a twitter package and the stream function to display all the random tweets. 

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


## Features

What's all the bells and whistles this project can perform?

* Allows the user to see fill in query and get custum wordcloud
* Works for multiple users


## Contributing

Feel free to help me with this project or add some new epic features!
The project is opensource!


## Wishlist

* [ ] Adding useful D3 actions to make a awesome data visualization
