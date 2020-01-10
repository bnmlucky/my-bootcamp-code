const express = require('express');
const app = express();
const port = 3000;

app.get('/howdy/:firstname', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`Hello ${req.query.title} ${req.params.firstname}`);
});

// const plants = [
//   'Monstera Deliciosa',
//   'Corpse Flower',
//   'Elephant-Foot Yam',
//   "Witches' Butter"
// ];

// app.get('/plants', (req, res) => {
//   res.send(`
//       <h1>Plants are awesome!</h1>
//       <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
//       `);
// });

// app.get('/hello/:firstname/:lastname', (req, res) => {
//   console.log('=========================================');
//   console.log(
//     'This is the entire Request Object sent from the browser to the server: '
//   );
//   console.log(req);
//   console.log('========================================');
//   res.send(`hello ${req.params.firstname} ${req.params.lastname}`);
// });

// app.get('/:index', (req, res) => {
//   res.send(req.params.index);
// });

app.listen(port, () => {
  console.log('Listening on port', port);
});
