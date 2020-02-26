const restify = require('restify');

const server = restify.createServer();
const porta = 8080;

server.get('/', index);

function index(req, res, next) {
    res.json({status: 'hello world!'});
}

server.listen(porta, () => {
    console.log('running on port %s...', porta);
});