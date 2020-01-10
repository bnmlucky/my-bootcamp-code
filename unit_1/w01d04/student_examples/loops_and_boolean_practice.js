/*for (i = 0; i < 15; i++) {
    console.log("hi");
}

for (i = 0; i < 30; i++) {
    console.log("YEP!");
}
*/

/*for (let some_num = 5; some_num < 15; some_num++) {
    if (some_num  < 10) {
        console.log("that's a small number");
    }
    else {
        console.log(some_num);
    }
}

for (some_num = 14; some_num < 24; some_num++) {
    if (some_num > 20) {
        console.log("that's a big number");
    }
    else {
        console.log(some_num);
    }
}
*/

/*for (let some_num = 1; some_num < 25; some_num++) {
    if (some_num < 10) {
        console.log("that's a small number");
    }
    else if (some_num > 20) {
        console.log("that's a big number");
    }
    else {
        console.log("this number is between 10 - 20");
    }
}

let x = Math.floor((Math.random() * 10) +1);
console.log(x);
*/

//Equator Drive
//goal: to find how much it will cost to drive around t
//I am not sure how the fact that the earth is rotating at 1000mph matters for this task
//gas costs $3/gallon
//car gets 15 miles/gallon
//the length of the equator is 24901 miles
//so...
//totalAmountOfGallons = 24901 / 15 = 1660.07
//money = 1660.07 * $3 = $4980.2

//Sandwich
// let bread, peanut butter jelly
// let allTheBread *=2
// sandwich = bread + peanut butter + jelly + bread

//Sarcophagus
//can fly for only 1 second = (t) 0.000277777777778 hour
//must be sent at minimum speed
//the sun is 0.00001581 light years away = (S) 92941067.15003 miles
//S = V * t
//V = S / t
//V 334598641739.840321086608128 miles/hour

//let fave_day = "Friday";
//days = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
//check the length of the array and loop through it
//compare the values: if fave_day === Monday - Friday, console.log "Give me a good ol' weekday"
// if fave_day Saturday/Sunday - console.log("I like the weekend");
// if fave_day is "September" (not a day), console.log ("That's not a day of the week")

let fave_day = "September";
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let daysLength = days.length;
for (let i = 0; i < daysLength; i++) {
    if (daysLength[i] === fave_day) { //I know something's wrong with this condition - but what? Need help
        console.log("Happy Friday");
    }
    else {
        console.log("I like the weekend");
    }
}