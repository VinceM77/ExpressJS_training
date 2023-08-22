const express = require('express');
const mustacheExpress = require('mustache-express')
const { movieRouter } = require('./Routers/movie.router');

const server = express();

server.engine('mustache',mustacheExpress());

server.set('view engine', 'mustache');
server.set('views', './Views');

server.use('/movies',movieRouter);

server.listen(8001,()=>{
    console.log('Listenning to 8001!')
});