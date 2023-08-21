const { Router }= require('express');
const { authorize } = require('./middlewares/authorize');

const userRouter = Router();


userRouter.get('/users',(request, response)=>{
    response.send('Bienvenue sur la route users')
})

userRouter.use(authorize)

exports.userRouter = userRouter;