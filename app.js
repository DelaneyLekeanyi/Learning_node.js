import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import http from 'http';
import path from 'path';
import fs from 'fs';
import Person from './person.js';


const PORT = process.env.PORT || 3002;

// Create a person instance
const person = new Person(
    'John',
    'Doe',
    28,
    [
        'BSc in Computer Science, University of Technology (2015-2019)',
        'MSc in Web Development, Digital University (2019-2021)'
    ],
    [
        'JavaScript (Node.js, React, Vue)',
        'HTML5 & CSS3',
        'Python',
        'Database Management (SQL, MongoDB)',
        'Git & Version Control'
    ],
    [
        'Senior Web Developer at Tech Solutions Inc. (2021-Present)',
        'Junior Developer at Digital Creations (2019-2021)',
        'Web Development Intern at StartUp Hub (2018-2019)'
    ]
);

const server = http.createServer((req, res) => {
    // Handle CSS file requests
    if (req.url === '/styles.css') {
        fs.readFile(
            path.join(__dirname, 'public', 'style.css'),
            (err, content) => {
                if(err) throw err;
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(content);
            }
        );
        return;
    }

    // Handle page requests
    if (req.url === '/'){
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if(err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            }
        );
    }
    else if (req.url === '/about'){
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'),
            (err, content) => {
                if(err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            }
        );
    }
    else if (req.url === '/cv'){
        fs.readFile(
            path.join(__dirname, 'public', 'cv.html'),
            (err, content) => {
                if(err) throw err;
                
                // Convert content to string
                let htmlContent = content.toString();
                
                // Replace the placeholder with person data using toString method
                htmlContent = htmlContent.replace(
                    '<div id="person-data">',
                    '<div id="person-data">' + person.toString()
                );
                
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(htmlContent);
            }
        );
    }
    else if (req.url === '/api/users'){
        const users = [
            {name: 'John', age: 30},
            {name: 'Jane', age: 25}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
    else {
        // Handle 404
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
        return;
    }
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view the website`);
});



