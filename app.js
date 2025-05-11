// includeing annd http module
const http = require('http');
var dt = require('./custom');

//including a fs module
const fs = require('fs');


//creating a new file
fs.writeFile('index.html', '<h1>Hello World</h1>', (err) => {
    if (err) throw err;
    console.log('File created successfully');
});

//deliting a file
fs.unlink('index.html', (err) => {
    if (err) throw err;
    console.log('File deleted successfully');
});
// creating a server
const server = http.createServer((req, res) => {
    // checking the request url and sending response accordingly reading the file
   fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write("<h1>404 Not Found</h1>");
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    }); 
});
// server listening on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');     
});