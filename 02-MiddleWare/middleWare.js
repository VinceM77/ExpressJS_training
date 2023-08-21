const express = require('express');
const { loggerMiddleware } = require('./middlewares/logger');
const { authorize } = require('./middlewares/authorize');
const { userRouter } = require('./user-router');

const server = express();


server.use('/users',userRouter);


server.use(authorize);
server.use(loggerMiddleware);

server.get('/', (request,response)=>{
    console.log('Je suis la route Bidon')
    response.send('Bidon =O')
})


// pour le port on peut utilser de 1024 à 65535!
server.listen(8001,()=>{
    console.log('Ready, listenning to port 8001 !')
})