/*const printBoo = () => {
    console.log('Boo!!!')
}
printBoo()
*/

/*
let num = 10;
const printSum = () => {
    console.log(num + num)
}
printSum()
*/

/* 
const printTriangle = () => {
    console.log(`#`);
    console.log(`##`);
    console.log(`###`);
    console.log(`####`);
    console.log(`#####`);
}
printTriangle()
*/

/*
const printTriangle = () => {
    let a ='#'
    for ( let i = 1; i <= 5; i++) {
        console.log(a)
        a += '#'
    }
}
printTriangle()
*/

/*
const sayName = (name) => {
    console.log('Hello! My name is ' + name)
}
sayName('Pippin')
*/

/*
const calculateArea = (num1, num2) => {
     console.log(num1*num2);
}
calculateArea(3, 6)
*/

// const minusOne = (num) => {
//     console.log(num - 1)
// }

// minusOne(10);
// minusOne(100);
// minusOne(Infinity);

// const makeSentence = (subj, verb, obj) => {
//     console.log("Oh boy, do " + subj + " " + verb + " " + obj+ " " + " or what?");
// }
// makeSentence("I", "want", "ice-cream");
// makeSentence("we", "plan to get", "sushi")

// const getLastElement = (arr) => {
//     console.log(arr[arr.length - 1]);
// }

// getLastElement([1,2,3,4,5,6]);
// getLastElement(['a', 'b', 'c']);
// getLastElement([[1,2,3], [4,5,6]]);

// const divideThreeNums = (num1, num2, num3) => {
//     let res = num2/num1;
//     console.log(num3/res);
// }

// divideThreeNums(10, 5, 2);
// divideThreeNums(30, 2, 9);

//cmd +? - comment the highlighted area out

const checkSquare = (num) => {
    const isPerfectSquare = Math.sqrt(num) % 1 === 0
    return isPerfectSquare;
}
//console.log(checkSquare(25))
    
const checkToLimit = (limit) => {
    for (num = 0; num <= limit; num++) {
        console.log(checkSquare(num), num);
    }
}
checkToLimit(100); 
