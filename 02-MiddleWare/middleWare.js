const express = require('express');
const { loggerMiddleware } = require('./middlewares/logger');
const { authorize } = require('./middlewares/authorize');

const server = express();

server.use(loggerMiddleware);
server.use(authorize);

server.get('/', (request,response)=>{
    console.log('Je suis la route Bidon')
    response.send('Bidon =O')
})

server.listen(8001,()=>{
    console.log('Ready, listenning to port 8001 !')
})