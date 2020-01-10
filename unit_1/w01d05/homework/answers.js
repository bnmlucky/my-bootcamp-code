////////////////////////////////
// Easy Going
////////////////////////////////

for (i = 1; i <= 20; i++) {
    console.log(i);
}
console.log(" "); // this is to separate output with an empty line 
////////////////////////////////
// Get Even
////////////////////////////////
for (i = 0; i <=200; i += 2) {
    console.log(i);
}

console.log(" ");

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//there will be numbers that are not divisible by either 3 or 5, I would like to show them as well
//to make sure that the solution is correct

console.log(" ");

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001;
console.log(plantee[2] + " : Plantee is a year older now!");

wolfy[3] = "Gotham City";
console.log(wolfy);

dart.push("Hawkins");
console.log(dart);

wolfy[0] = "Gameboy";
console.log(wolfy);

console.log(" ");

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
let x;

for (x of ninjaTurtles) {
    (console.log(x.toUpperCase()));
}

console.log(" ");

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
console.log(favMovies.sort());
//.sort() permanently alters the original array
console.log(favMovies);
console.log(favMovies.pop()); //this will show the array element that we are removing
console.log(favMovies); //this will print the array without the last element we just removed
console.log(favMovies.push("Guardians of the Galaxy"), favMovies); //that statement prints the new amount of array elements as well as the elements themselves
console.log(favMovies.reverse());
console.log(favMovies.shift(), favMovies);
//in the line above I am printing out the actual value of the [0]-indexed element that will be removed
//and the array elements that are left after .shift()
//unshift() method returns the new length of the array after it adds new items to the beginning of an array
console.log(favMovies.indexOf("Django Unchained"));
console.log(favMovies.splice(14, 1, "Avatar")); //this will print the removed item
console.log(favMovies); //this will return the new array, as the splice() method changes the original array
let sliceStartingPoint = favMovies[Math.floor(favMovies.length / 2)];
// console.log(sliceStartingPoint); //that gives us the value of the middle array element
console.log(favMovies.indexOf(sliceStartingPoint)); // this is the index of the middle element of the array - where we should start slicing from
console.log(favMovies.slice(9));
//.slice() method does not change the original array
const favMoviesSlice = favMovies.slice(9);
console.log(favMoviesSlice);
// we are creating a new array, favMoviesSlice, derived from the favMovies array
// I do not fully understand the task #10: "console.log your final results"
console.log(favMovies); //this is what the original array looks like after all the transformations
console.log(favMovies.indexOf("Volver"));   
// We get a negative value (-1) when we look for the index of something that is not in the array
// we can use const for an array and still change the element values
// we could also use "let" keyword to declare an array, but const and let are different in scope
// const is global, let is block scope - so we need to see what suits us better

console.log(" ");

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                     ["Lucinda", "Jacc", "Neff", "Snoop"],
                     ["Petunia", ["Baked Goods", "Waldo"]]]
console.log(whereIsWaldo.splice(1,1)); //this is the element I am removing
console.log(whereIsWaldo); //this is what's left after removing "Eggbert"
whereIsWaldo[1][2] = "No one";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////

const kittyTalk = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away..."
];

let meow = 0;

for (i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
    if (i % 2 === 0) {
        // const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
        let meow = 0;
        meow = Math.floor((Math.random() * 3));
        console.log(kittyTalk[meow]);

    }
}

console.log(" ");

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
/* Median of a sorted array of size n is defined 
as below : 
It is middle element when n is odd and average
of middle two elements when n is even.

Since the array is not sorted here, we sort 
the array first.
Then find the length of the array to see if it's odd or even
Depending on length console.log the middle element or the average between two middle elements.
*/

console.log(nums.length);
const numsSorted = (nums.sort(function (a, b){return a- b}));
console.log(numsSorted);
let medianIndex = Math.floor(numsSorted.length / 2); //this is actually the index of the element we need
console.log(numsSorted[medianIndex]); //this prints out the value of the median number
