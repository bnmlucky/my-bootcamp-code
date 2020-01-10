const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Random Whatever");
});

app.get("/somedata", (req, res) => {
  res.send("Here's your information.");
});

app.listen(3000, () => {
  console.log("My server is now running!");
});
