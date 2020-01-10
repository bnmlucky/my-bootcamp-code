// const printGreeting = name => {
//   console.log(`Hello ${name}`);
// };

// setTimeout(() => {
//   printGreeting('Leo');
// }, 2000);

const socky = name => {
  console.log('I will happily iron your socks!');
};

// const foodie = () => {
//   console.log('I will sort your M&Ms so that your never encounter a green one');
// };

// const pr = () => {
//   console.log('I will make sure everyone knows you are the best boss ever');
// };

// let string = 'hi';

// const boss = employee => {
//   console.log('I am the boss and you will do as I say');
//   employee();
// };

// boss(string);

const capitalize = word => {
  return word[0].toUpperCase() + word.substring(1);
};

// console.log(capitalize('word'));

const handleWords = (string, capitalize) => {
  console.log(capitalize(string));
};

handleWords('hello', capitalize);
