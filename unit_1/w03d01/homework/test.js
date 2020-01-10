// 1. The difference between a PARAMETER and an ARGUMENT is that the former is a letiable passed into a function, while the latter are the real values passed into the function.
// 2. The difference between a RETURN and a CONSOLE LOG is that the former has the main purpose of using the return value which one would like to have as a letiable value, while the latter is a function which one wil write the argument value on the console.

// function checkPalindrome(string){
//     let forward = string.toLowerCase();
//     let backwards = "";

//     for(let lastIndex = forward.length-1; lastIndex >= 0; lastIndex--){
//       backwards += forward[lastIndex];
//     }
//     if(forward === backwards){
//       return true
//     } else {
//       return false
//     }
//   }

//   console.log(checkPalindrome("Radar"));
//   console.log(checkPalindrome("Borscht"));

// console.log(
//     [1, 2, 3, 4, 5, 6].reduce((a, b) => a + b, 0)
//   );

// for (let printPrimes = 0; printPrimes <= 97; printPrimes++) {

//     let checkPrime = false;
//     for (let i = 2; i <= printPrimes; i++) {
//         if (printPrimes%i===0 && i!==printPrimes) {
//             checkPrime = true;
//         }
//     }
//     if (checkPrime === false) {
//                 console.log(printPrimes);
//     }
// }

let usersMove = prompt("Do you choose rock, paper or scissors?");
if (!usersMove) {
  document.write(
    "<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>"
  );
} else {
  document.write("<p>Player 1:" + " " + usersMove + "</p>");
}
let computersMove = Math.random();
if (computersMove < 0.34) {
  computersMove = "rock";
} else if (computersMove <= 0.67) {
  computersMove = "paper";
} else {
  computersMove = "scissors";
}

document.write("<p>Computer:" + " " + computersMove + "</p>");
let compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return "It's a tie!";
  }
  if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "You win!";
    } else {
      return "You lose! Try again.";
    }
  }
  if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "You win!";
    } else {
      return "You lose! Try again.";
    }
  }
  if (choice1 === "scissors") {
    if (choice2 === "rock") {
      return "You lose! Try again.";
    } else {
      return "You win!";
    }
  }
};

let results = compare(usersMove, computersMove);

document.write(results);