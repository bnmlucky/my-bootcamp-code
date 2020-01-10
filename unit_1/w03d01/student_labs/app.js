const generateRandom = (min, max) => {
  let randomNumber = Math.random() * (max - min) + min;
  return randomNumber;
};

class Schwartz {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }

  isDead() {
    return this.hull <= 0;
  }
}

class Alien {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  isDead() {
    return this.hull <= 0;
  }
}

const gameState = {
  HERO_WON: "HERO_WON",
  ALIENS_WON: "ALIENS_WON",
  PLAYING: "PLAYING"
};

class GameController {
  constructor() {}

  createAlienShip = () => {
    const hull = generateRandom(3, 6);
    const firepower = generateRandom(2, 4);
    const accuracy = generateRandom(0.6, 0.8);
    return new Alien(hull, firepower, accuracy);
  };

  setupGame = () => {
    this.hero = new Schwartz();
    alert("Here is the USS Schwartzenegger defending the Earth!");
    this.alienArmy = [];
    for (let i = 0; i < 6; i++) {
      this.alienArmy.push(this.createAlienShip());
    }
    alert("There comes an alien army!");
  };

  hitOrMiss = accuracy => {
    return Math.random() < accuracy;
  };

  schwartzAttacks = alien => {
    if (this.hitOrMiss(this.hero.accuracy)) {
      alien.hull -= this.hero.firepower;
      console.log("You got'em, Schwartz! Yay!");
      console.log(`Alien hull is down to ${alien.hull}!`);
    } else {
      console.log(
        "Schwartz missed!!! Oh no!!! Aliens are going to destroy the Earth!!!"
      );
    }
  };

  alienAttacks = alien => {
    if (this.hitOrMiss(alien.accuracy)) {
      this.hero.hull -= alien.firepower;
      console.log("Schwarz got shot!!! Oh no!!! ");
      console.log(`Hero hull is down to ${this.hero.hull} !`);
    } else {
      console.log("YAliens missed! Can you even shoot, suckers?");
    }
  };

  round = () => {
    const alien = this.alienArmy[0];

    while (true) {
      this.schwartzAttacks(alien);
      if (alien.isDead()) {
        this.alienArmy.splice(0, 1);
        if (this.alienArmy.length === 0) {
          console.log("You got'em all, Schwartz!");
        } else {
          console.log(`One alien down! ${this.alienArmy.length} to go!`);
        }
        return;
      }

      this.alienAttacks(alien);
      if (this.hero.isDead()) {
        console.log("Schwarz just died... To your blasters, people!");
        return;
      }
    }
  };

  determineState = () => {
    if (this.hero.isDead()) return gameState.ALIENS_WON;
    else if (this.alienArmy.length == 0) return gameState.HERO_WON;
    else return gameState.PLAYING;
  };

  informUserAndAskIfContinue = state => {
    let shouldContinue = true;
    switch (state) {
      case gameState.HERO_WON:
        shouldContinue = confirm("You won! Do you want to play again?");
        break;
      case gameState.ALIENS_WON:
        shouldContinue = confirm("You lost! Do you want to play again?");
        break;
      case gameState.PLAYING:
        shouldContinue = confirm(
          "Do you want to continue (OK) or retreat (Cancel)?"
        );
    }
    return shouldContinue;
  };

  runGame = () => {
    let shouldContinue = true;
    while (shouldContinue) {
      this.round();
      const state = this.determineState();
      shouldContinue = this.informUserAndAskIfContinue(state);
      if (shouldContinue && state != gameState.PLAYING) {
        this.setupGame();
      }
    }
  };
}

let game = new GameController();
game.setupGame();
game.runGame();
