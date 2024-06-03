// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Read comments.json
let comments = [];
fs.readFile('comments.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    comments = JSON.parse(data);
  }
});

// Set up the server
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});