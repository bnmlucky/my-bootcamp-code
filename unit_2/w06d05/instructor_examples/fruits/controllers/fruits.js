const express = require('express');
const router = express.Router();

// MODEL
const Fruit = require('../models/fruits');

// INDEX
router.get('/', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    res.render('index.ejs', {
      fruits: allFruits
    });
  });
});

// NEW (CLIENT)
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// SHOW
router.get('/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('show.ejs', {
      fruit: foundFruit
    });
  });
});

// CREATE (SERVER)
router.post('/', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    if (error) {
      res.send(error);
    } else {
      res.redirect('');
    }
  });
});

router.delete('/:id', (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('');
    }
  });
});

router.get('/:id/edit', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    if (err) {
      console.log(err);
    } else {
      res.render('edit.ejs', {
        fruit: foundFruit
      });
    }
  });
});

router.put('/:id', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruit.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedFruit) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/fruits');
      }
    }
  );
});

module.exports = router;
