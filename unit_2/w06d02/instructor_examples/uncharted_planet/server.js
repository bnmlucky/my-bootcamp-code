const express = require('express')
const app = express()

const planets = require('./models/planets')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('app running on root'))

app.get('/planets/new', (req, res) => {
  res.render('new.ejs')
})

app.post('/planets', (req, res) => {
  const newPlanet = req.body
  planets.push(newPlanet)
  console.log(planets)
  res.redirect('/planets')
})

app.listen(3000, () => console.log('running on 3000'))
