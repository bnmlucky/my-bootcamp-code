// const adventurer = {
//   name: 'Timothy',
//   hitpoints: 10,
//   belongings: ['sword', 'potion', 'Tums']
// }

// // console.log(adventurer.belongings[0])

// for (let i = 0; i < adventurer.belongings.length; i++) {
//   const currentBelonging = adventurer.belongings[i]
//   console.log(currentBelonging)
// }

// const adventurer = {
//   name: 'Timothy',
//   hitpoints: 10,
//   belongings: ['sword', 'potion', 'Tums'],
//   companion: {
//     name: 'Velma',
//     type: 'Bat',
//     companion: {
//       name: 'Tim',
//       type: 'Parasite',
//       belongings: ['SCUBA tank', 'Rogan josh', 'health insurance']
//     }
//   }
// }

// console.log(adventurer.companion.companion.belongings[2])

const movies = [
  { title: 'Tokyo Story' },
  { title: 'Paul Blart: Mall Cop' },
  { title: "L'Avventura" }
]

// console.log(movies[0])
// console.log(movies[0].title)
// for (let i = 0; i < movies.length; i++) {
//   const currentMovie = movies[i]
//   console.log(currentMovie.title)
// }

// const movie = {
//   title: "L'Avventura",
//   director: 'Michelangelo Antonioni',
//   year: 1960
// }

// for (let key in movie) {
//   console.log(movie[key])
// }
// console.log(movie['title'])

// const myFunc = () => {

// }

// const foo = {
//   someMethod: () => {
//     console.log('oh hai')
//   }
// }

// console.log(foo.someMethod)
// foo.someMethod()
// const foo = {
//   someArray: [1, 2, 3]
// }

// for (let element of foo.someArray) {
//   console.log(element)
// }

// const foo = () => {
//   return ['apple', 'banana', 'pear']
// }

// const bar = foo()

// console.log(bar)
// console.log(bar[1])
// console.log(foo()[1])

const foo = () => {
  return {
    someProperty: 'hi!'
  }
}

// const bar = foo()

// bar.someProperty //hi

console.log(foo().someProperty)
