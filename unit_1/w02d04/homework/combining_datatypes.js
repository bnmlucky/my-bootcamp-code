const kitchen = {
  food: [
    "potatoes",
    "cheese",
    "onions",
    "steak",
    "chicken tenders",
    "tomatoes"
  ],
  utensils: [
    "plates",
    "forks",
    "knives",
    "spoons",
    "casserole",
    "cups",
    "wine glasses"
  ],
  drinks: [
    "water",
    "coffee",
    "tea",
    "beer",
    "hot chocolate",
    "wine",
    "tequila",
    "vodka"
  ]
};

console.log(kitchen.drinks[1]);

const family = {
  person: "father",
  name: "Sergei",
  age: 38,
  hobby: {
    game: "chess",
    tvshow: "Silicon Valley",
    sport: "swimming"
  }
};

console.log(family.hobby.sport);

const sistersArray = [
  {
    name: "Wilma",
    age: 30,
    hobby: "knitting"
  },
  {
    name: "Catherine",
    age: 32,
    hobby: "reading"
  },
  {
    name: "Cynthia",
    age: 34,
    hobby: "gardening"
  }
];
console.log(sistersArray[2].hobby);

const stuffInHouse = [
  "bedroom",
  "garage",
  "patio",
  "backyard",
  ["basement", "laundry room"],
  "guest room",
  "living-room"
];

console.log(stuffInHouse[4][1]);

const createGamePlayer = (name, score, gamesPlayed) => {
  const playerDetails = {
    name: name,
    score: score,
    gamesPlayed: gamesPlayed
  };
  return playerDetails;
};
console.log(createGamePlayer("Joe", 10, 10).name);

const gamePlayer = (name, scores) => {
  const playerInfo = {
    name: name,
    scores: [1, 2, 3]
  };
  return playerInfo;
};

console.log(gamePlayer("Sam", [1, 2, 3]).scores[2]);

const saySomething = () => {
  return () => {
    console.log("There is something I want to tell you");
  };
};

const convo = saySomething();
convo();

// const gum = {
//   name: "Bubble Gum",
//   price: 1
// };

const vendingMachine = {
  snacks: [
    {
      name: "Pringles",
      price: 1
    },
    {
      name: "Snickers",
      price: 2
    },
    {
      name: "Bubble Gum",
      price: 1
    }
  ],
  vend(number) {
    return vendingMachine.snacks[number];
  }
};

const snack = vendingMachine.vend(2);
console.log(snack.name);

console.log(vendingMachine.vend(2).name); // or we could also do it in one line

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------//

const operateNums = (number, func) => {
  return func(number);
};

const multByTwo = number => {
  number = number * 2;
  return number;
};

const squareNum = number => {
  number = number * number;
  return number;
};

console.log(operateNums(123, multByTwo));
console.log(operateNums(123, squareNum));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------//

// clean up this code:

const bar = () => {
  console.log("bar here");
};

const foo = () => {
  console.log("foo here");
};

bar();
foo();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------//

// foo();

// const foo ()=>{
//     console.log('hi');
// }

// Identifier "foo" has already been declared (because I have it on line 161 already from the previous task)
// If I comment it out from line 161 to 166 then I get another error:  "Missing initializer in const declaration" - this is because I'm calling the function foo() before it was declared
