// Dependencies
const express = require('express');
const app = express();
const port = 3000;

//middleware
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));

// 'Data'
const fruits = require('./models/fruits.js');

// routes

// index
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits
  });
});

app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
});

// show
app.get('/fruits/:index', (req, res) => {
  const currentFruit = fruits[req.params.index];
  res.render('show.ejs', {
    fruit: currentFruit
  });
});

// post
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect('/fruits');
});

app.listen(port, () => {
  console.log('listening on port', port);
});
