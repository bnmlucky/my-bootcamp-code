//dependencies

const express = require("express");
const app = express();
const port = 3000;
const budget = require("./models/budget.js");

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//get routes

// app.get("/", (req, res) => {
//   res.render("index.ejs");
// }); // that was to test the connection of the server.js file and index.ejs file

//index
//GET /budgets

app.get("/budgets", (req, res) => {
  res.render("index.ejs", {
    budget: budget
  });
});

//new
//GET /budgets/new

app.get("/budgets/new", (req, res) => {
  res.render("new.ejs");
});

//show
//GET /budgets/:index

app.get("/budgets/:index", (req, res) => {
  const currentBudgetItem = budget[req.params.index];
  res.render("show.ejs", {
    budgetItem: currentBudgetItem
  });
});

//create
//POST /budgets

app.post("/budgets", (req, res) => {
  budget.push(req.body);
  res.redirect("/budgets");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
