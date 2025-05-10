// includeing annd http module
const http = require('http');
var dt = require('./custom');



// creating a server
const server = http.createServer((req, res) => {
    // setting the response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // sending the response
    
    res.end(`<h1>Hello World</h1><p>The date and time are currently: ${dt.custom()}</p>`);
});

// server listening on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');     
});