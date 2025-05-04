const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Welcome');
    console.log('User was opened the page in browser')
});

server.listen(5500);
