const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express()

// SETUP DB
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// CONTROLLERS
const usersController = require('./controllers/users.js')
const sessionsController = require('./controllers/sessions.js')

// MIDDLEWARE
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

app.get('/', (req, res) => res.render('index.ejs'))

app.listen(3000, () => console.log('running on 3000'))
