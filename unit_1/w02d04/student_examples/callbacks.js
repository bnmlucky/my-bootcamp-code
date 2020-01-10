// const printGreeting = name => {
//   console.log(`Hello ${name}`);
// };
// //set;
// setTimeout(printGreeting, 4000);

// setTimeout(() => {
//   console.log("Hello, there!");
// }, 4000);

const socky = () => {
  console.log("I will happily iron your socks!");
};

const foodie = () => {
  console.log("I will sort your M&Ms so that you never encounter a green one!");
};
const pr = () => {
  console.log("I will make sure everyone knows you are the best boss ever");
};
const boss = employee => {
  console.log("I am the boss and you will do as I say!");
  employee();
};

boss(socky);
boss(foodie);
boss(pr);

boss(() => {
  console.log(
    "I'll still hand grind your coffee beans even though you never remember my name"
  );
});
//why has it gone to the console when I never really called boss function?

const capitalize = word => {
  return word[0].toUpperCase() + word.substring(1);
};

console.log(capitalize("word"));

const excitedWords = word => {
  return word + "!";
};

console.log(excitedWords("whatever"));

const handleWords = (string, excitedWords) => {
  console.log(excitedWords(string));
};

handleWords("hello", excitedWords);
