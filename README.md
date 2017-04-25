# Twitter stream demo

> Project description

For the  course Realtime web I created a realtime twitter stream working on Node.js with an express server and socket.io

I created a realtime app that allows you to enter a search query which will respond with related tweets.
This sounds pretty simple but I had a hard time figuring everything out. Besides that, under the surface happen a couple of actions.

First off the app is build in Node.js. Uses a express server and socket.io for realtime connections. I also require a twitter package and the stream function to display all the random tweets.

> Basic functionality

A user comes to my url and has the possibility to fill in a query that he or she finds interesting. The query is being stored client side.
I use socket.io to emit this query to the server. When the query has arrived @ the server I use the value of the query in a socket.on function. Inside this function I also call the stream of the twitter stream api. I then filter all the general tweets on the given query of the user. I send the filtered tweets back to the client where I render the tweets on the home screen.


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

* Allows the user to see fill in query and see related tweets
* Also works when on the planet Mars with no internet connection!! (jokes.)


## Contributing

Feel free to help me with this project or add some new epic features!
The project is opensource!


## Wishlist

* [ ] Adding useful D3 actions to make a awesome data visualization
* [ ] Adding option so user can type multiple querys to combine search results e.g Javascript & react
