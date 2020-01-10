// class Person {
//   constructor(name, age, eyes, hair) {
//     this.legs = 2
//     this.arms = 2
//     this.name = name
//     this.age = age
//     this.eyes = eyes
//     this.hair = hair
//   }
//   greet(otherPerson) {
//     console.log('hi ' + otherPerson + '!')
//   }
//   walk() {
//     console.log('I hate when my Segway is in the shop.')
//   }
// }

// const me = new Person('Karolin', 41, 'green', 'copper dark ash blonde')
// console.log(me)
// const elmo = new Person('Elmo', 5, 'black', 'scarlet red')
// console.log(elmo)

// class Person {
//   constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
//     this.legs = 2
//     this.arms = 2
//     this.name = name
//     this.age = age
//     this.eyes = eyes
//     this.hair = hair
//     this.lovesCats = lovesCats
//     this.lovesDogs = lovesDogs || false
//   }
//   greet(otherPerson) {
//     console.log('hi ' + otherPerson + '!')
//   }
//   walk() {
//     console.log('I hate when my Segway is in the shop.')
//   }
// }
// const me = new Person(
//   'Karolin',
//   40,
//   'green',
//   'copper dark ash blonde',
//   true,
//   true
// )
// const you = new Person('Matt', 36, 'blue', 'blonde')
// // console.log(me)
// console.log(you)

class Person {
  constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2
    this.arms = 2
    this.name = name
    this.age = age
    this.eyes = eyes
    this.hair = hair
    this.lovesCats = lovesCats
    this.lovesDogs = lovesDogs || true
  }
  greet(otherPerson) {
    console.log('hi ' + otherPerson + '!')
  }
  classyGreeting(otherClassyPerson) {
    console.log('Howdy ' + otherClassyPerson.name + '!')
  }
  setHair(hairColor) {
    this.hair = hairColor
  }
  walk() {
    console.log('I hate when my Segway is in the shop.')
  }
}
const supermanPerson = new Person('Clark Kent', 30, 'blue', 'black')
// console.log(supermanPerson)

// class SuperHero extends Person {
//   fly() {
//     console.log('Up up and away!')
//   }
//   greet(otherPerson) {
//     console.log(`Greetings Earthl- Oops, I mean ${otherPerson}`)
//   }
// }
// const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
// superman.greet('Bob')