const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js");

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    pokemon: pokemon
  });
});

// app.get("/pokemon/:id", (req, res) => {
//   const id = req.params.id;
//   const whatever = pokemon[id];
//   res.send(req.params.id);
// }); //--- this is showing just the number that is the index for the pokemon array

app.get("/pokemon/:index", (req, res) => {
  const index = req.params.index;
  const actualPokemon = pokemon[index];
  res.render("show.ejs", {
    character: actualPokemon
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
