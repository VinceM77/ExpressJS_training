const express = require('express');
const userRouter = require('./Routers/users.router');

// créer une instance de l'application
// représente notre server
const app = express();

app.get('/hello',(request,response)=>{
    response.send('Hello World!');
})

app.use(userRouter);

//démarrer notre server

app.listen(8001,()=>{
    console.log('Ready to listen');
});

