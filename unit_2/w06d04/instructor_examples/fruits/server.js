const express = require('express')
const mongoose = require('mongoose')
const app = express()

// MODEL
const Fruit = require('./models/fruits')

mongoose.connect('mongodb://localhost:27017/basiccrud', {
  useNewUrlParser: true
})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('app is running')
})

// SHOW
app.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('show.ejs', {
      fruit: foundFruit
    })
  })
})

// NEW
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
})

// INDEX
app.get('/fruits', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    if (error) {
      res.send(error)
    } else {
      res.render('index.ejs', {
        fruits: allFruits
      })
    }
  })
})

// CREATE
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  Fruit.create(req.body, (error, createdFruit) => {
    if (error) {
      res.send(error)
    } else {
      res.redirect('/fruits')
    }
  })
})

app.listen(3000, () => console.log('running on PORT 3000'))
