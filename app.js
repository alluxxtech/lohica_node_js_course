const http = require('http');
const { serverLogger } = require('./logger');
const config = require('./config');

http.createServer((req, res) => {
    res.writeHeader(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello world!' }));
}).listen(config.APP_PORT, serverLogger);