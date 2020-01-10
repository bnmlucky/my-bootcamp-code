//Schema goes here
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  img: String,
  price: { type: Number, min: 0 }, //setting minimums with messages or without doesn't work
  qty: { type: Number, min: 0 } // it generally looks like I can't enforce the required and min params to work
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
