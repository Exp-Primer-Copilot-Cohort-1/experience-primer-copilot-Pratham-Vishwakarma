// Create web server
const http = require('http');

const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello, World!'); });

server.listen(3000, 'localhost', () => { console.log('Server running at http://localhost:3000/'); });
// Handle errors
server.on('error', (error) => {
    console.error('An error occurred:', error);
});

// Handle server close
server.on('close', () => {
    console.log('Server closed');
});
