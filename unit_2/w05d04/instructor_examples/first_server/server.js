const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Random string');
});

app.get('/somedata', (req, res) => {
  res.send('Here is your information');
});

app.listen(3000, () => {
  console.log('My server is now running');
});
