// class Person {}
// const me = new Person();
// const you = new Person();
// console.log(me);
// console.log(you);
// console.log(typeof me);
// console.log(typeof you);

// class Person {
//   greet() {
//     console.log("hi!");
//   }
// }
// const me = new Person();
// const you = new Person();
// me.greet(); // use an object, not the class - class is a blueprint and doesn't do anything
// you.greet();

// class Person {
//   greet(otherPerson) {
//     console.log("hi " + otherPerson + "!");
//   }
//   walk() {
//     console.log("I hate when my Segway is in the shop.");
//   }
// }
// const me = new Person();
// const you = new Person();
// me.greet("Joseph");
// me.walk();
// you.greet("Natalia");
// you.walk();
// no commas in between methods in a class

// class Person {
//   constructor() {
//     this.legs = 2;
//     this.arms = 2;
//     this.eyes = "blue";
//     this.hair = "blonde";
//   }
//   greet(otherPerson) {
//     console.log("hi " + otherPerson + "!");
//   }
//   walk() {
//     console.log("I hate when my Segway is in the shop.");
//   }
// }
// const me = new Person();
// console.log(me);

// class Person {
//   constructor(name, age, eyes, hair) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//   }
//   greet(otherPerson) {
//     console.log("hi " + otherPerson + "!");
//   }
//   walk() {
//     console.log("I hate when my Segway is in the shop.");
//   }
// }
// const elmo = new Person("Elmo", 50, "black", "scarlet red");
// console.log(elmo);
// const me = new Person("Karolin", 41, "green", "copper dark ash blonde");
// console.log(me);

class Person {
  constructor(name, age, eyes, hair, lovesCats, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs;
  }
  greet(otherPerson) {
    console.log("hi " + otherPerson + "!");
  }
  setHair(hairColor) {
    this.hair = hairColor;
  }
  //   setLovesCats(catlove) {
  //     this.lovesCats = catlove;
  //}
  walk() {
    console.log("I hate when my Segway is in the shop.");
  }
}
const you = new Person("Matt", 36, "blue", "blonde");
console.log(you);
you.setHair("red");
console.log(you);
you.setLovesCats(true);
// you.setLovesCats("absolutely");
