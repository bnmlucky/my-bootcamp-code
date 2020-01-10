const express = require('express')
const mongoose = require('mongoose')
const session = require("express-session")

const app = express()

// CONTROLLERS
const usersController = require('./controllers/users.js')
const sessionsController = require('./controllers/sessions.js')
const methodOverride = require('method-override')

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(
  session({
    secret: 'feedmeseymour', //some random string
    resave: false,
    saveUninitialized: false
  })
)
app.use('/users', usersController)
app.use('/sessions', sessionsController)

app.get("/", (req, res) => {
  res.render("index.ejs", {
    currentUser: req.session.currentUser
  })
})

app.get('/app', (req, res) => {
  if (req.session.currentUser) {
    res.send('the party')
  } else {
    res.redirect('/sessions/new')
  }
})

// SETUP DB
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})






app.get('/', (req, res) => res.render('index.ejs'))

app.listen(3000, () => console.log('running on 3000'))
