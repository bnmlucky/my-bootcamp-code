// Building space battle
// first some classes for each new object need to be created
// two classes:
// ===============human spaceship
// one with properties for the human spaceship including hull, firepower, accuracy. then some methods in the class for actions each ship will take. ie:\/\/\/\\/\/\/\/
// Every time the ship will attack, calculate the chance that the damage will hit the opposing ship using Math.random()
// If the ship's accuracy is 0.8 - then if the number generated from Math.random() is less than or equal to 0.8 then the attack will be successful. If the value is greater than 0.8 then the attack has missed.
// Adjust the accuracy based on the specs for each ship
// =============alien spaceship
// the second class will be for the alien ships
// each alien ship will also have properties for hull, firepower and accuracy. each ship will have unique values determined randomly.
// ================== ship creation and methods for fighting
//
class HumanShip {
  constructor(name) {
    this.name = name;
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
  attackShip(alienNames) {
    console.log("Ready?! FIRE!");
    console.log(alienNames.hull);
    while (alienNames.hull > 0) {
      const shot = Math.random();
      if (shot <= 0.7) {
        alienNames.hull -= this.firepower;
        console.log(
          `Hit! ${this.name} struck the enemy. ${alienNames.name} hull health is now ${alienNames.hull}`
        );
      } else {
        console.log(`oh no we missed!`);
        alienNames.attackShip(humanShip);
        break;
      }
    }
  }
  //     for (let i = 1; i <= 6; i++) {
  //       const shot = Math.random();
  //       if (shot <= 0.7) {
  //         alienNames.hull -= this.firepower;
  //         console.log(
  //           `hit! ${this.name} struck the enemy. ${alienNames.name} hull health is ${alienNames.hull}`
  //         );
  //       }
  //       if (alienNames.hull <= 0) {
  //         console.log("Another one bites the dust");
  //       } else {
  //         console.log(
  //           `Dang! Miss! The alien ship has ${alienNames.hull} health left`
  //         );
  //       }
  //     }
  //   }
  // }
}
const humanShip = new HumanShip("USS Schwarzenegger");

console.log(humanShip);
class AlienShip {
  constructor(name) {
    this.name = name;
    this.hull = Math.floor(Math.random() * 3) + 3;
    this.firepower = Math.floor(Math.random() * 2) + 3;
    this.accuracy = (Math.random() * (0.6 - 0.8) + 0.8).toFixed(1);
  }
  attackShip(humanShipName) {
    console.log("Charging Photon Cannon....FIRE!");
    for (let i = 0; i <= 6; i++);
    const shot = Math.random();
    if (shot <= (Math.random() * (0.6 - 0.8) + 0.8).toFixed(1)) {
      humanShipName.hull -= this.firepower;
      console.log(
        `hit! ${this.name} struck the enemy. ${humanShipName.name} hull health is ${humanShipName.hull}`
      );
    }
    if (humanShipName.hull <= 0) {
      console.log(`Human scum deleted`);
    } else {
      console.log(
        `Miss! That human scum ship has ${humanShipName.hull} health left`
      );
      humanShip.attackShip(alienName);
    }
  }
}

// const randonName = () => {
//   let name = alienSwarm[Math.floor(Math.random() * name.length)];
// };

const alienName = ["a", "b", "c", "d", "e", "f"];
const alienSwarm = [];
for (let i = 0; i < 6; i++) {
  const newAlien = new AlienShip();
  alienSwarm.push(new AlienShip(alienName[i]));
}

for (let i = 0; i < 6; i++) {
  humanShip.attackShip(alienSwarm[i]);
}

// const alienShip1 = new AlienShip(`alien ship 1`);
// console.log(alienSwarm);
//
// humanShip.attackShip(alienSwarm);
// console.log(humanShip, alienShip1);
// console.log(alienShip1.hull);
// alienShip1.attackShips(humanShip);
// humanShip.attackShip(alienSwarm[0]);