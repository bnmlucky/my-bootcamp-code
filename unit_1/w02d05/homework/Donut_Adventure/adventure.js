console.log("Javascript is running");

const getRandom = num => {
  return Math.floor(Math.random() * num);
};

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories"
    ];
  }
  talkSass(catchPhrases) {
    const randNum = getRandom(this.catchPhrases.length);
    console.log(this.catchPhrases[randNum]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(enemy, weapons) {
    const damagePoints = this.weapons.sprinkleSpray;
    enemy.health -= damagePoints;
    console.log(
      `${enemy.name} got hit by ${
        Object.keys(this.weapons)[0]
      }! His health is now ${enemy.health}!`
    );

    //console.log(this.weapons.sprinkleSpray);

    //console.log("i'm ready to rumble");
  }
}

const dougie = new Hero("Dougie");
// dougie.talkSass();
// dougie.announceHealth();
// dougie.fight();

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    };
    this.catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer"
    ];
  }
  talkSmack(catchPhrases) {
    const randNum = getRandom(this.catchPhrases.length);
    console.log(this.catchPhrases[randNum]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(enemy, weapons) {
    const damagePoints = this.weapons.pepperoniStars;
    enemy.health -= damagePoints;
    console.log(
      `${enemy.name} got hit by ${
        Object.keys(this.weapons)[0]
      }! His health is now ${enemy.health}!`
    );
  }
}

const rat = new Enemy("Pizza Rat");
// rat.talkSmack();
// rat.announceHealth();
// //rat.fight();

// dougie.talkSass();
// rat.talkSmack();
// dougie.announceHealth();
// rat.announceHealth();
// //dougie.fight(rat);
// console.log(rat);

rat.fight(dougie);

dougie.fight(rat);

dougie.announceHealth();

rat.announceHealth();
