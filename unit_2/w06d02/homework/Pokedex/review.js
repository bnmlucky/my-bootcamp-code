app.get("/pokemon/:id/edit", (req, res) => {
  const selectedPokemon = pokemonArray[req.params.id];
  res.render("edit.ejs", {
    data: selectedPokemon,
    index: req.params.id
  });
});

app.put("/pokemon/:id", (req, res) => {
  console.log("updated", req.body);
  const updatedPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(","), //split turns a string into an array
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense
    }
  };
  pokemonArray[req.params.id] = updatedPokemon;
  res.redirect(`/pokemon/${req.params.id}`);
  //for the create form there is no value attribute for the input fields
  //edit form does have them to be able to pre-populate the fields
});

app.delete("/pokemon/:id", (req, res) => {
  const pokeIndex = req.params.id;
  pokemonArray.splice(pokeIndex, 1);
  res.redirect("/pokemon");
});
