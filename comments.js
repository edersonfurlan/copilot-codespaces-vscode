//Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//Create array to store comments
const comments = [
  { username: 'John', comment: 'Hello Everyone!' },
  { username: 'Emily', comment: 'Hi John!' }
];

//Create route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

//Create route to post a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

//Start server
app.listen(4001, () => {
  console.log('Server listening on 4001');
});