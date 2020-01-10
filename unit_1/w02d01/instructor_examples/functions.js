// const printBoo = () => {
//   console.log('Boo!!!')
// }

// printBoo()

// const sum = () => {
//   console.log(10 + 10)
// }

// sum()

// const printTriangle = () => {
//   let a = '#'
//   for (let i = 1; i <= 5; i++) {
//     console.log(a)
//     a += '#'
//   }
// }

// printTriangle()

// const sayName = (name) => {
//   console.log('Hello! My name is ' + name)
// }

// sayName('Pippin')

// const calculateArea = (num1, num2) => {
//   console.log(num1 * num2)
// }

// calculateArea(3, 6)

// const returnTen = () => {
//   return 10
//   console.log('this works!')
//   return 20
//   //   console.log(10)
// }

// console.log(returnTen())

// const numberTen = returnTen()

// console.log(8 + returnTen())

// const exampleFunction = () => {
//   const num = 100
//   console.log(num * num)
// }

// console.log(num) // num is not available outside the function
// const item = 'spicy meatball'

// const exampleFunction = () => {
//   console.log(`${item} within function`)
//   const anotherFood = 'pizza'
//   if (10 > 0) {
//     console.log('i love ' + anotherFood)
//   }
// }
// // console.log(anotherFood)
// exampleFunction()

// const returnName = () => {
//   return 'Mark'
// }

// const mark = returnName()
// // console.log(mark)

// const returnGreeting = () => {
//   return `oh hai, ${mark}`
// }

// console.log(returnGreeting())

const checkSquare = (num) => {
  //   console.log(num)
  // output: true/false
  // input: num
  // IF perfect square, return true
  // IF NOT return false
  const isPerfectSquare = Math.sqrt(num) % 1 === 0
  //   if (isPerfectSquare) {
  //     return true
  //   } else {
  //     return false
  //   }
  return isPerfectSquare
}

console.log(checkSquare(16))
