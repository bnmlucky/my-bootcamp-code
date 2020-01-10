// const car = {
//   color: 'blue',
//   hp: 4000,
//   year: 1989
// };

// console.log(car.year);

// const house = {
//   doors: 9
// };

// console.log(house);

// house.windows = 30;
// house.doors = 10;

// console.log(house);

// house.windows++;

// console.log(house);

// const mogwai = {};

// mogwai = { name: 'Gizmo' };

// console.log(mogwai);

// let key = 'bad guy';

// const goblin = {
//   'bad guy': true
// };

// // console.log(goblin['badGuy']);
// console.log(goblin[]);

// const bar = {};

// for (let i = 0; i < 10; i++) {
//   bar[`key${i}`] = 'random string';
// }

// console.log(bar);

// const line = {
//   str: 'one'
// };

// console.log(line.str);

const whatevs = {
  keys: ['whatevs', 'count'],
  whatevs: 'hi',
  count: 4
};

// if (whatevs.whatevs == 'hi') {
//   console.log('ok');
// }

// for (let i = 0; i < whatevs.count; i++) {
//   console.log(i);
// }

for (let i = 0; i < whatevs.keys.length; i++) {
  console.log(whatevs[whatevs.keys[i]]);
}
