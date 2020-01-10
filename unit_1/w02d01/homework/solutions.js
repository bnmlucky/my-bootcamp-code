// The difference between a parameter an an argument is as follows:
// a parameter is the variable in the functions statement that the function accepts
// an argument is an actual value for the parameter that the function accepts.

//The difference between return and console.log within a function is that
//console.log doesn't let us use the value being printed again - it serves mostly for debugging/informative purposes
// return is used for returning values from a function that can be used later, when using return the function will stop executing

const checkPalindrome = (string) => {
   let re = /[\W_]/g; //this is a regular expression to remove non-alphanumeric characters from a string - that was new to me, I googled it out
   let lowCaseString = string.toLowerCase().replace(re, '');
   let reverseString = lowCaseString.split('').reverse().join(''); //the fact that you can stack methods like this was new to me, too
   return reverseString === lowCaseString;
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

const sumArray = (arr) => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

const checkPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) { //this part: "i <=Math.sqrt(num)" probably contains a bug
        if (num % i === 0) {
            return false;
        }
        return num > 1;
    }
}

//console.log(checkPrime(6));
//console.log(checkPrime(4));
//console.log(checkPrime(5));

const printPrimes = (arbLimit) => {
    const primes = [];
    for (let number = 2; number <= arbLimit; number++) {
        if (checkPrime(number)) {
            primes.push(number);
        }
    } return primes;
}
console.log(printPrimes(97));
// I have a bug here - numbers like 9 get into my array.  But I can't determine what condition I should be accounting for to avoid that.
// But I am getting all prime numbers as well. It's taking me too much time to solve this bug.
// I need to stop here in order to get to the last task.

/*
const randomMove = () => {
    choice = Math.random() 
        if (choice < 0.34){
            choice = "rock";
        } else if (choice < 0.67) {
            choice = "paper";
        } else {
            choice = "scissors";
        }
    }
*/
// am having a very hard time writing this function with an if statement

const randomMove = () => {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    }
}
// did it this way because it's clearer for me to see what happens

let computersMove = randomMove();

let usersMove = randomMove();

const rockPaperScissors = (computersMove, usersMove) => {
    if (computersMove === usersMove) {
        console.log("It's a tie!");
    } else if (computersMove === "rock" && usersMove === "scissors") {
        console.log("Computer chose rock");
        console.log("User chose scissors");
        console.log("Rock beats scissors, computer wins!")
    } else if(computersMove === "paper" && usersMove === "scissors") {
        console.log("Computer chose paper");
        console.log("User chose scissors");
        console.log("Scissors beat paper, user wins!");
    } else if (computersMove === "paper" && usersMove === "rock") {
        console.log("Computer chose paper");
        console.log("User chose rock");
        console.log("Paper beats rock, computer wins!");
    } else if (computersMove === "scissors" && usersMove === "rock") {
        console.log("Computer chose scissors");
        console.log("User chose rock");
        console.log("Rock beats scissors, user wins!");
    } else if (computersMove === "rock" && usersMove === "paper") {
        console.log("Computer chose rock");
        console.log("User chose paper");
        console.log("Paper beats rock, user wins!");
    } else if (computersMove === "scissors" && usersMove === "paper") {
        console.log("Computer chose scissors");
        console.log("User chose paper");
        console.log("Scissors beat paper, computer wins!");
    }
}

rockPaperScissors(computersMove, usersMove);

//and the morning of the following day came
//and Brian is helping to get through prime numbers
const checkPrime1 = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) { //this part: "i <=Math.sqrt(num)" probably contains a bug
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime1(3));
console.log(checkPrime1(4));
console.log(checkPrime1(9));
console.log(checkPrime1(11));

//
