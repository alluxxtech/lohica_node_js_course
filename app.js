const http = require('http');
const { serverLogger } = require('./logger');

http.createServer((req, res) => {
    res.writeHeader(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello world!' }));
}).listen(3000, serverLogger);