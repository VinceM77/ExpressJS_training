const userRouter = Router();

userRouter.get('/users', (request, response) => {
    response.send({
        users: [
          {
            firstName: 'Romain',
            lastName: 'Verliefden', 
          }  
        ]
    })
})

userRouter.get('/users/banane', (request, response) => {
    response.send('Banane mais c\'est différent');
})

userRouter.get('/users/:id', (request, response) => {
    const { id } = request.params
    response.send(id);
})

module.exports = userRouter;