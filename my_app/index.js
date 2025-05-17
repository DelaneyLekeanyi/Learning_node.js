const express = require('express');
const app = express();
const path = require('path')

// Middleware to parse JSON bodies
app.use(express.json());

var courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
  { id: 4, name: 'course4' },
  { id: 5, name: 'course5' },
]
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/cv', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cv.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signin.html'));
});

//404 error handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.get('/api/courses', (req, re0s) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  // Find the course with the given ID
  const course = courses.find(c => c.id === parseInt(req.params.id));

  // If not found, return 404 Not Found
  if (!course) return res.status(404).send('The course with the given ID was not found.');

  // Return the course
  res.send(course);
});

// POST endpoint to add a new course
app.post('/api/courses', (req, res) => {
  // Validate request body
  if (!req.body.name || req.body.name.length < 3) {
    // Return 400 Bad Request if validation fails
    return res.status(400).send('Name is required and should be minimum 3 characters.');
  }

  // Create a new course object
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  // Add to courses array
  courses.push(course);

  // Return the created course
  res.status(201).send(course);
});

app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000....');
} );