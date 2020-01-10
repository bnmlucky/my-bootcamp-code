// DRY
// "DRY" stands for "Do not repeat yourself", and we have been applying this principle already creating functions and loops

// KISS
// "KISS" stands for "keep it simple, stupid", which means we need to find the shortest simplest solution to our problem, to not over-engineer

// Avoid creating a YAGNI
//"YAGNI" stands for "You aren't going to need it", so we shouldn't be creating variables/functions, etc. that we are not going to use.

// Do the simplest thing that could possibly work
// This is actually a question to ask yourself to help moving forward in building your app/solving a problem to stay on the path towards simplicity

// Don't make me think
// This phrase is a title of a book by Steve Krug on web usability, but the idea is relevant to programming:  code should be easily read and understood with a minimum of effort required

// Write code for the maintainer
// Write code so that anyone can understand and maintain it.

// Single responsibility principle
// A component of code (a class or a function) should perform only one task and do it well

// Avoid premature optimization
// "Premature optimization is the root of all evil" - Donald Knuth.  Do not optimize if your code is working.

// Separation of concerns
// Different areas of functionality should be managed by distinct and minimally overlapping modules of code.

// What surprises me:
// Avoid creating a YAGNI - it does not serve you to stash away variables that you could potentially use later, no hoarding in code
// Avoid premature optimization - no perfectionism either.  Don't fix what's not broken.

// DRY is giving me the most trouble.  I feel like I've learned to express myself in very short sentences and am repeating myself.

const f = l => {
  // we declare function f with l as a parameter it accepts
  let es = 0, // a variable es is initialized and set to 0
    p = 0, // a variable p is initialized and set to 0
    c = 1, // a variable c is initialized and set to 1
    n = 0; // a variable n is initialized and set to 0
  while (c <= l) {
    //a while loop starts: while the value of c is less or equals the value of l
    n = c + p; // with that ^^^ condition being true, n equals the sum of values of c and p
    [c, p] = [n, c]; // array [c, p] is assigned values of [n, c]
    es += c % 2 === 0 ? c : 0; // variable es adds even values of c... and then I don't know what "? c : 0" means...
  }
  console.log(es);
  console.log(c);
  return es; // function f returns the value of es after executing
};

console.log(f(55)); //function f is called with the argument of 55 passed in

const f2 = limit => {
  //a function f2 is declared with a parameter limit
  let evenSum = 0; // on the following 3 lines 3 variables are initialized
  let last = 0; // and set to different values
  let current = 1;
  while (current <= limit) {
    // we are running a while loop, as it seems we are looking for a sum of even numbers up to a certain limit
    let next = current + last; //variable next is set to the sum of current and last variables
    [current, last] = [next, current]; // the current and last values are reassigned to next and current values
    if (current % 2 === 0) {
      // if the value of current is even
      evenSum += current; //the value of current is added to evenSum Variable
    }
  }
  return evenSum; //evenSum variable is returned
};

console.log(f2(55));

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// The most semantic name for this function would have been something like "calcEvenSum"

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// Definitely f2!  I would see more clearly what it does and what I need to do.

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// I cannot even remove it and save the file, as I have the formatting extension turned on in my VS Code.
// So, the VS Code strongly insists that it should be there.  I am not sure why, though.
