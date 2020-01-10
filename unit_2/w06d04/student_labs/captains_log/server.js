//Dependencies

const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Log = require("./models/logs.js");

//Middleware

app.use(express.urlencoded({ extended: false }));

//Configuration
const dbName = "logs";
const mongoURI = `mongodb://localhost:27017/${dbName}`;
const db = mongoose.connection;

//Connect to Mongo

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log("the connection with mongodb is established");
});

//New

app.get("/logs/new", (req, res) => {
  res.render("new.ejs");
});

//Create

app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (error, createdLog) => {
    if (error) {
      res.send(error);
    } else {
      //   res.send(createdLog);
      res.redirect("/logs");
    }
  });
});

//Index
app.get("/logs", (req, res) => {
  Log.find({}, (error, allLogs) => {
    if (error) {
      res.send(error);
    } else {
      res.render("index.ejs", {
        logs: allLogs
      });
    }
  });
});

//Show

app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    res.render("show.ejs", {
      logs: foundLog
    });
  });
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
