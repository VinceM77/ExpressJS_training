const{Router} = require('express');


const userRouter = Router();

userRouter.get('/users', (request,response)=>{
    response.send({
        users: [
            {
                firstName: 'Vince',
                lastName: 'Maton',
            }
        ]
    })
})

module.exports = userRouter;