/*
1. const is the variable type for the object
object has a name (like any variable would)
{} define an object
within curly braces there are key-value pairs
that look like this:  "key: value";
keys can be numbers or strings
values can be anything
key-value pairs are separated from each other with a comma
*/

const me = {
    name: "Natalia",
    age: 39,
    email: "bnmlucky@gmail.com"
}

console.log(me);
me.age = 1000;
console.log(me.age);
me['place of residence'] = "Wilton";
console.log(me['place of residence']);

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
}

console.log(monster.name);
monster.type = "creature";
console.log(monster.type);
monster.age = 6;
console.log(monster.type);
console.log(monster.age);

// who is in the game:
// ogre : name, hitpoints (3 for each of those)
// adventurer: name, hitpoints

// ask the user: do you want to hit or run?
// for (hitpoints = 3; hitpoints = 0, hitpoints--)
// if ogre.hitpoints === 0 || adventurer.hitpoints === 0
// alert("Game over");

// battle: function hit takes away a hitpoint from the opponent
// function: run - leaves the same amount of hitpoints for the opponent

const ogre = {
    name: "BadGuy",
    hitpoints: 3
}

const adventurer = {
    name: "Hero",
    hitpoints: 3
}

const ogreMove = prompt('Ogre: Hit or run?', 'hit/run');

const adventurerMove = prompt('Adventurer: Hit or run?', 'hit/run');

const ogreLoseHealth = () => {
    if(adventurerMove === 'hit') {
        ogre.hitpoints--;
    } 
}

const advLoseHealth = () => {
    if(ogreMove === 'hit') {
        adventurer.hitpoints--;
    }
}

const battle = () => {
    if (ogre.hitpoints > 0 || adventurer.hitpoints > 0) {
        ogreMove();
        adventurerMove();
    } else if (ogre.hitpoints === 0 || adventurer.hitpoints === 0) {
        alert("Game over!");
    }
}

battle();