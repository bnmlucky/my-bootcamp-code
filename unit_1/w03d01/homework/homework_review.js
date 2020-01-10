class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack() {}
}
const readyAlienShips = num => {
  const alienFleet = [];
  for (let i = 0; i < num; i++) {
    let alienShip = new Ship(``);
  }
};

const startAttacking = (hero, aliens) => {
  while (aliens[0].hull > 0) {
    aliens[0].attack(hero);
    console.log(`${hero.name} is at ${hero.hull} hull`);
    if (hero.hull > 0) {
      hero.attack(aliens[0]);
      console.log(`${aoiens[0].name} is at ${aliens[0].hull} hull`);
    }
  }
  if (aliens[0].hull <= 0) {
    console.log(`${aliens[0].name} has been defeated`);
    aliens.shift();
  }
};

const promptForAction = () => {
  const answer = prompt("Attack or Retreat? (a/r)");
  answer.toLowerCase();
  if (answer === "a") {
  }
};
