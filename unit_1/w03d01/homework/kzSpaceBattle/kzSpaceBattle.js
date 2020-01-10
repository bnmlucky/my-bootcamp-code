/*
 1. I used one class because both our hero and enemy ships share the same properties.
 2. Ship class should have a method for attacking the opponent ship.
 3. The attack method should take in a parameter for the enemy object instance.
 4. The attack method should also subtract current ship's firepower from enemy's hull.
 5. The attack method *could* incorporate the accuracy check with Math.random() to determine if the attack was successful or not.
*/

class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack(enemy) {
    const randomDecimal = Math.random();
    if (randomDecimal >= this.accuracy) {
      console.log(`${this.name}'s attack was successful`, randomDecimal);
      enemy.hull -= this.firepower;
    } else {
      console.log(`${this.name}'s attack missed`, randomDecimal);
    }
  }
}

// Instantiate USS Schwarzenegger with 20 hull, 5 firepower, 0.7 accuracy.
const ussSchwarzenegger = new Ship("USS Schwarzenegger", 20, 5, 0.7);
console.log(ussSchwarzenegger);

/*
 1. Create a function that will be used to generate a random number.
 2. Using JS Math.floor() and Math.random() to randomly generate a number between a range.
 3. MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
 1. Use a for loop to create 6 alien ships.
 2. Use the randomRange() declared above to randomize the alien ship attributes
 3. Hull: 3-6, Firepower: 2-4, Accuracy: 0.6-0.8
 4. Since there will be 6 alien ships, it's best to use an array and return it.
*/

const readyAlienShips = (num) => {
  const alienFleet = [];
  for (let i = 0; i < num; i += 1) {
    let alienShip = new Ship(
      `Alien #${i + 1}`,
      randomRange(3, 6),
      randomRange(2, 4),
      randomRange(6, 8) / 10
    );
    alienFleet.push(alienShip);
  }
  return alienFleet;
}

// Instantiate the alien ships by calling readyAlienShips() and assign the returned array to const alienShips
const alienShips = readyAlienShips(6);
console.log(alienShips);

/*
 1. Use a function to handle the battle scene between our hero and enemy ships
 2. Since only one alien ship can be targeted at a time, I'm hardcoding 0 index for the first alien ship in the array.
 3. Use a while loop to repeatedly attack until either the enemy or hero ship is defeated.
 4. Once the targeted alien ship is defeated, use .shift() to remove it from the front of the array. I placed this if statement below the while loop so the order of the defeated message is in the correct order.
*/

const startAttacking = (hero, aliens) => {
  let keepAttacking = true;
  while (aliens[0].hull > 0 && keepAttacking === true) {
    if (hero.hull > 0) {
      aliens[0].attack(hero);
      console.log(`${hero.name} is at ${hero.hull} hull`);
      hero.attack(aliens[0]);
      console.log(`${aliens[0].name} has ${aliens[0].hull} hull`);
    } else {
      console.log(`${hero.name} has been defeated by aliens.`);
      keepAttacking = false;
      alert("You lost and now we're all in danger :(");
    }
  }
  if (aliens[0].hull <= 0) {
    console.log(`${aliens[0].name} has been defeated`);
    aliens.shift();
  }
}

/*
 1. Create a function to prompt user for attack/retreat inputs.
 2. Use an if/else statement to conditionally check if user has correctly entered 'a' or 'r'. If they type in anything else, keep prompting them.
*/

const promptForAction = () => {
  const answer = prompt('Attack or Retreat? (a/r)');
  answer.toLowerCase();
  if (answer === 'a') {
    console.log('=== === Attacking enemy alien ships...=== ===');
    startAttacking(ussSchwarzenegger, alienShips);
  } else if (answer === 'r') {
    console.log('=== === You have retreated === ===');
  } else {
    promptForAction();
  }
}

// Now we can call promptForAction to start one round of the battle.
promptForAction();

/*
 1. To keep track of how to start/reset the game, use a function that handles starting the game from scratch.
 2. Use a while loop to keep the prompts going as long as there are still enemy ships left in the array.
*/

const startGame = () => {
  while (alienShips.length > 0 && ussSchwarzenegger.hull > 0) {
    promptForAction();
  }
}

/*
 1. We were able to get one round of battle going with calling promptForAction(), but if we want to keep attacking until all enemies are defeated, call startGame().
*/

// startGame();

/*
 1. I did not get to set up a reset function, or a check win function. Based on how I've set this game up so far, where might you start to modify to include both of those features?
*/
