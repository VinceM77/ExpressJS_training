function authorize(request, response,next) {
    const { username } = request.query;
    if (username !== 'Dramix') {
        return response.send('Tu n\'es pas le bienvenu ici !! :/')
    }
    next();
}

exports.authorize = authorize;