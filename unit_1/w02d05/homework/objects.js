class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
  eat() {
    this.weight++;
    this.mood++;
    //console.log(this.weight, this.mood);
  }
  exercise() {
    this.weight--;
    //console.log(this.weight);
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice(); //This does not work.  How do I use getPrice() to get it?
  }
}

const person1 = new Person("Timmy");
console.log(person1);
for (i = 0; i < 5; i++) {
  person1.ageUp();
}
console.log(person1);

for (i = 0; i < 4; i++) {
  person1.eat();
}
console.log(person1);

for (i = 0; i < 5; i++) {
  person1.exercise();
}
console.log(person1);

for (i = 0; i < 4; i++) {
  person1.ageUp();
}
console.log(person1);

const hamster1 = new Hamster("Gus");
console.log(hamster1);

hamster1.owner = "Timmy";
console.log(hamster1);

person1.buyHamster(hamster1);
console.log(person1);

for (i = 9; i < 15; i++) {
  person1.ageUp();
}
console.log(person1);

for (i = 0; i <= 1; i++) {
  person1.eat();
}

console.log(person1);

for (i = 0; i <= 1; i++) {
  person1.exercise();
}
