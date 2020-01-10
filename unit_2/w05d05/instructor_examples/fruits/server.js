const express = require('express')
const fruits = require('./models/fruits')

const app = express()

app.get('/fruits/', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits
  })
})

app.get('/fruits/:index', (req, res) => {
  const index = req.params.index
  const currentFruit = fruits[index]
  res.render('show.ejs', {
    fruit: currentFruit
  })
})

app.listen(3000, () => {
  console.log('listening')
})
