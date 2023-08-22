const { Router } = require('express');

const movieRouter = Router();

movieRouter.get('/', (request,response)=>{
    response.render('movies',{
        message:'Welcome to my movie\'s list : ',
        title: 'My vid\'s collection',
        movies: [
            {
                title: 'Forrest Gump'
            },{
                title:'Alice in Wonderland'
            },{
                title : 'Star wars : Empire strikes back'
            }

        ],
        listElement : function (){
            return function(text,render){
                return '<li>'+render(text)+'</li>'
            }
        }
    })
})



exports.movieRouter = movieRouter;