// you don't have to have a setter method, you can just reassign the variable
// if you apply a method to different instances of things, make it a separate thing
// and then apply to all those different things
randomNumGenerator(arr) {
    return Math.floor(Math.random() * arr.length);
}
talkSass() {
    console.log(`${this.name} says`, this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]);
}

randomWeapon () {
    return this.weapons[this.randomNumGenerator(this.weapons)];
}

// I did not think of randomizing weapons...

// if you pass in an object to a method, you can access and influence its keys/meaning key values

