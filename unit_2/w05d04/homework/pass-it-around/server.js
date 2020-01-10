const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log("listening on port", port);
});
app.get("/", (req, res) => {
  res.send(`
    <html>
        <body>
            <h1>99 Bottles of beer on the wall</h1>
            <a href="/99">take one down, pass it around</a>
        </body>
    </html>`);
});

app.get("/:next_bottle", (req, res) => {
  if (req.params.next_bottle - 1 <= 0) {
    res.send(`<h1>Gone are the bottles of beer on the wall.</h1>
        <a href="/">More?</a>`);
  } else {
    res.send(`<h1>${req.params.next_bottle -
      1} of bottles of beer on the wall</h1>
      <a href=/${req.params.next_bottle -
        1}>take one down, pass it around </a>`);
  }
});
