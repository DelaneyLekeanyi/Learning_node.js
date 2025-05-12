// index.js
const express = require('express');
const app = express();
const path = require('path')
const port = 3000;


//rendering html pages with express

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
