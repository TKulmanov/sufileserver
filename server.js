const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router('./files.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());


server.use(router);

server.listen(port);