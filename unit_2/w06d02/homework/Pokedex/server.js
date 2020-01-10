//Dependencies
const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
//Data
const pokemon = require("./models/pokemon.js");

//Index
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    data: pokemon
  });
});

//New 
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs")
})

//Post/Create
app.post("/pokemon", (req, res) => {
  console.log(req.body);
  pokemon.push(req.body);
  res.redirect("/pokemon")
})

//Edit/Update/Put  - need to go in here
app.get("/pokemon/:index/edit", (req, res) => {
  res.render("edit.ejs", {
    pokemon: pokemon[req.params.index],
    index: req.params.index
  })
})

app.put("/pokemon/:index", (req, res) => {
  pokemon[req.params.index] = req.body;
  res.redirect("/pokemon")
})


//Show
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    data: pokemon[req.params.id]
  });
});

//Delete

app.delete("/pokemon/:index", (req, res) => {
  pokemon.splice(req.params.index, 1);
  res.redirect("/pokemon");
})


//Listener
app.listen(port, () => {
  console.log("listening on port", port);
});
