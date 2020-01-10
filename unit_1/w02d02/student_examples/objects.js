// const car = {
//     color: "blue",
//     hp: 4000,
//     year: 1989
// }

// console.log(car.color);

// const house = {
//     doors: 9
// };

// console.log(house);

// house.windows = 30;
// house.doors = 10;

// console.log(house);

// house.windows = 20;

// console.log(house);

// you cannot replace (stuff an object into an object, array into array)

// const goblin = { badGuy: true}
// console.log(goblin['badGuy']);

// we need that for keys that have a space in between (bad practice, but there is a workaround for this)

// const bar = {
//     key1: 'one',
//     key2: 'two',
//     key3: 'three',
//     key4: 'four'
// };
// for (let i = 1; i <= 4; i++) {
//     console.log(bar[`key${i}`]);
// }

// const bar = {};
// for (let i = 1; i <= 10; i++) {
//     bar['key'+i] = 'foo' //cannot do this with . notation - this will give you an error
// }
// console.log(bar);

//the Object.keys() helps you get the list of keys

// const line = {
//     1: 'one'
// };
// console.log(line['1']);
// console.log(line.str); // can't do that

const whatevs = {
    keys: ['whatevs', 'count'],
    whatevs: 'hi',
    count: 4
}
// if(whatevs.whatevs == "hi") {
//     console.log('ok');
// }
// for (let i=0; i < whatevs.count; i++) {
//     console.log(i);
//}
for (let i=0; i < whatevs.keys.length; i++) {
    console.log(whatevs[whatevs.keys[i]]);
}
