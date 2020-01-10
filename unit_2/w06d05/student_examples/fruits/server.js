const express = require('express')
const app = express()
const mongoose = require('mongoose');

// DB SETUP
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// MIDDLEWARE
app.use(express.urlencoded({ extended:true }));

// MODEL
const Fruit = require('./models/fruits')

// INDEX
app.get('/fruits/', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
})

// NEW (CLIENT)
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs')
})

// SHOW
app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render('show.ejs', {
            fruit: foundFruit
        });
    });
})

// CREATE (SERVER)
app.post('/fruits/', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect('/fruits');
        }
    });
})

app.listen(3000, (req, res) => console.log('listening on PORT 3000!'))