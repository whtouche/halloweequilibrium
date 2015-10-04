# HalloweeQuilibrium
### About
Super simple Angular app consisting of one directive for a Halloween trivia quiz. Note that the node_modules folder is not checked into git, but bower_components is - this is because I had to add a line to the "main" array in the bower.json file within bootstrap in order to properly be able to inject it into index.html with gulp. It's kindof hacky! But I haven't figured out what I'm doing wrong with gulp / wiredep yet.

### Installing and running the app
First clone the repo and change into the directory, then run:
```sh
$ npm install
```
To install dependencies
```sh
$ gulp inject
```
To compile the less to CSS and inject the CSS and JS files into index.html
```sh
$ npm start
```
To start the server. Then navigate to [http://localhost:8080](http://localhost:8080)

### Todos

 - Write Tests
 - Better design
 - Better documentation / comments