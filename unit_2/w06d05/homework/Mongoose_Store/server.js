const methodOverride = require('method-override');

// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
const productsController = require("./controllers/products.js");
app.use("/products", productsController);
app.use(express.static("public"));

// Configuration
const dbName = "products";
const mongoURI = `mongodb://localhost:27017/${dbName}`;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log("the connection with mongodb is established");
});

//Listener
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
