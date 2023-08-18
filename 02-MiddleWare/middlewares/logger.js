const fs = require('fs/promises');

async function loggerMiddleware(request,response,next) {
    await  fs.appendFile('logs.txt', `${new Date().toISOString()} ${request.method} ${request.url}\n`);
    console.log('Je suis le logger middleware!')
    next()

}

exports.loggerMiddleware = loggerMiddleware;