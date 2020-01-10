const express = require('express');
const methodOverride = require('method-override');
const pokemonArray = require('./models/pokemon');
const app = express();
const PORT = 3005;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.get('/', (req, res) => res.redirect('/pokemon'));

// Index
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', { data: pokemonArray });
});

// New
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
});

// Edit
app.get('/pokemon/:id/edit', (req, res) => {
  const selectedPokemon = pokemonArray[req.params.id];
  res.render('edit.ejs', {
    data: selectedPokemon,
    index: req.params.id
  });
});

// Show
app.get('/pokemon/:id', (req, res) => {
  const selectedPokemon = pokemonArray[req.params.id];
  res.render('show.ejs', {
    data: selectedPokemon,
    index: req.params.id
  });
});

// Create
app.post('/pokemon', (req, res) => {
  console.log('Received: ', req.body);
  const newPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(','),
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense
    }
  }
  console.log('Added: ', newPokemon);
  pokemonArray.push(newPokemon);
  res.redirect('/pokemon');
});

// Update
app.put('/pokemon/:id', (req, res) => {
  console.log('updated', req.body)
  const updatedPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(','),
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense
    }
  }
  pokemonArray[req.params.id] = updatedPokemon;
  res.redirect(`/pokemon/${req.params.id}`);
});

// Delete
app.delete('/pokemon/:id', (req, res) => {
  const pokeIndex = req.params.id;
  pokemonArray.splice(pokeIndex, 1);
  res.redirect('/pokemon');
});

app.listen(PORT, () => console.log(`Pokedex running on port ${PORT} in ${app.get('env')} mode.`));
