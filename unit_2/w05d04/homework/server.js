const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log("listening on port", port);
});
app.get("/greeting/:name", (req, res) => {
  res.send(`Hello! What's up, ${req.params.name}! It's so great to see you!`);
});
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const tipAmount = req.params.total * (req.params.tipPercentage / 100);
  res.send(`${tipAmount}`);
});
const magic8BallArray = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

const giveRandomAnswer = () => {
  const randomAnswerIndex = Math.floor(Math.random() * magic8BallArray.length);
  const randomAnswer = magic8BallArray[randomAnswerIndex];
  return randomAnswer;
};

const showRandomAnswer = giveRandomAnswer();

app.get("/magic/:name", (req, res) => {
  res.send(`${req.params.name} <h1>${giveRandomAnswer()}</h1`);
});
