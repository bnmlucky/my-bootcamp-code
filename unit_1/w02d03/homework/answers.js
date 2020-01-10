//1.  A lightswitch that can be either on or off
// datatype: boolean
// data structure example:  const lightswitch = true;
//2.  A user's email address
// datatype: string
// data structure example: const email = "bnmlucky@gmail.com"
//3.  A spaceship with a hull, laser blasters, tractor beam, and warp drive
// datatype: object
// data structure example: 
// const spaceship = {
//    structure: 'hull',
//    weapon1: 'laser blaster', 
//    weapon2: 'tractor beam',
//    speed: 'warp drive'
// }
// 4.  A list of student names from our class
// datatype: array
// data structure example:
// const students = ['Pam', 'Josh', 'Craig', 'Prathiusia', 'Sunny', 'Jenny', 'Carmen']
// 5.  A list of student names from our class, each with a location
// datatype: an array of objects
// const studentData = [
//    {name: 'Natalia', location: 'Wilton'},
//    {name: 'Pam', location: 'Norwalk'},
//    {name: 'Carmen', location: 'Norwalk'}
//]
// 6.  A list of student names from our class, each with a location and each with a list of favorite tv shows
// datatype: an array of objects, where one of object's properties is an array
// const studentInfo = [
//{ name: 'Natalia', location: 'Wilton', tvshows: ['Silicon Valley', 'Big Little Lies']},
//{ name: 'Pam', location: 'Norwalk', tvshows: ['Westworld', 'Black Mirror']},
//{ name: 'Carmen', location: 'Norwalk', tvshows: ['Stranger Things', 'Game of Thrones']}
//]

const rainbow = ['red', 'orange', 'yellow', 'green', 'light blue', 'blue', 'purple'];
console.log(rainbow[5]);

const natalia = {
    faveFood: 'salad',
    hobby: 'sleep',
    town: 'Wilton',
    datatpe: 'array'
}
console.log(natalia.hobby);

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }
console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);
crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
console.log(crazyObject.larry.quotes);

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

 const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];

let bondTitles = [];
for (let i = 0; i < bondFilms.length; i++) {
    bondTitles.push(bondFilms[i].title);
}
console.log(bondTitles);

let oddBonds = [];
for (let i = 0; i < bondFilms.length; i++) {
    if(bondFilms[i].year % 2 === 1) {
        oddBonds.push(bondFilms[i].title);
    }
}
console.log(oddBonds);

let totalGross = [];
for (let i = 0; i < bondFilms.length; i++) {
    totalGross.push(bondFilms[i].gross);
}
console.log(totalGross); //made an array of "gross" money as string values with $ sign

// I need to convert these strings to numbers
// get rid of the $ first (that's a lot of values to replace and I don't know how to do that in bulk using a loop)
// then convert strings to numbers - I think there is a regular expression for both of these things:  .replace(/[^0-9.-]+/g,"")
// then add together all the numbers in the array

let totalGrossNoDollar = [];
for (let i = 0; i < totalGross.length; i++) {
    totalGrossNoDollar.push(totalGross[i].replace(/[^0-9.-]+/g,""));
}
console.log(totalGrossNoDollar); // got rid of the $ sign

let totalGrossNumbers = [];
for (let i = 0; i < totalGrossNoDollar.length; i++) {
    totalGrossNumbers.push(Number(totalGrossNoDollar[i]));
}
console.log(totalGrossNumbers); //converted strings to numbers in that array

let totalCumulativeGross = 0;
for (let i = 0; i < totalGrossNumbers.length; i++) {
    totalCumulativeGross += totalGrossNumbers[i];
}
console.log(totalCumulativeGross); //I get this number: 13,821,621,224.


