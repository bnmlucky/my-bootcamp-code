const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log("a < b ", a < b);
console.log("'Name' == 'Name'", "Name" == "Name");
console.log("a < b < c", a < b < c);
console.log("a + a < d", a + a < d);
console.log("e !== 'kevin' ", e !== "kevin");
console.log("48 !== '48' ", 48 !== "48");
console.log("f !== e ", f !== e);
let g = 0;
console.log("g = ", g);
g = b + c;
console.log("g = ", g);
console.log("a != (b || f) **f && e != c ", a != (b || f) ** f && e != c);
//   const runProgram = true;

// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }

//The above code will give an error because runProgram is declared with 'const' and can't be updated




// let letters = "A";
// let i = 0;
// start a while loop that runs as long as i less than 20
// while (i < 20) {
// concatenate the letter 'A' into the variable 'letters'
// 	letters += "A";
// increment the the variable i by 1
// 	i++;
// }
//print the value of 'letters' to the screen
// console.log(letters);


// for (let i = 0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }

// The first part of the control panel is: used to declare and initialize an increment variable
// The second part of the control panel is: a test expression that determines if the loop will continue or exit
// The third part of the control panel is: increments the initialized variable

// console.log('Without you, today\'s emotions are the scurf of yesterday\'s');

// the backslash '\' is an escape character, it is enabling the use of single quotes ' in single quote comments
for (let i = 1; i < 11; i++) {
  console.log("The value i is: " + i + " of 10");
}

console.log("using string Interpolation");

for (let i = 1; i < 11; i++) {
  console.log(`The value of i is: ${i} of 10`);
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i]);
}

console.log("interate over every second element")
for (let i = 0; i < StarWars.length; i += 2) {
  console.log(StarWars[i]);
}
