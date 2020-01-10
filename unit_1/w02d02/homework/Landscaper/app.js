console.log("JavaScript is running");

const start = () => {
    daysWorked = 0;
    money = 0;
    tools = ["teeth"];
    askForAction();
}

const askForAction = () => {
    showStatus();
    const choice = prompt("Would you like to make some money?", "yes/no/restart the game");

    if(choice === 'yes') {
        earnMoneyTeeth();
    } else if(choice === 'no') {
        askForAction();
    } else if (choice === 'restart') {
        start();
    } else {
        alert('Let\'s restart the game');
        start();
    }
}

const showStatus = () => {
    alert("You have $ " + money + " and this tool to work with: " + tools[0] + " for $1/day");
}

const earnMoneyTeeth = () => {
    daysWorked++;
    money++;
    if (money >= 5) {
        checkForScissors();
    } else {
        alert("Keep working!");
        askForAction();
    }
}

const checkForScissors = () => {
    const scissorsUpgrade = prompt("Would you like to buy scissors and start making $5/day?", 'yes/no');
    if (scissorsUpgrade === 'yes') {
        buyScissors();
        askForActionScissors();
    } else if (scissorsUpgrade === 'no') {
        alert("Think again!");
        askForAction();
    } else {
        alert("Keep working!");
    }
}

const buyScissors = () => {
    money -= 5;
    tools.pop();
    tools.push("scissors");
    alert("Your new scissors will let you earn $5/day!");
}

const showStatusScissors = () => {
    alert("You have $ " + money + " and this tool to work with: " + tools[0] + " for $5/day");
}

const askForActionScissors = () => {
    showStatusScissors(); 
    const choiceScissors = prompt("Would you like to make 5 times more money with your new scissors?", "yes/no");
    if(choiceScissors === 'yes'){
        earnMoneyScissors();
    } else if(choiceScissors === 'no'){
        alert("Don't be lazy! There's money to make!");
        askForActionScissors();
    } else {
        alert("Try again!");
        askForActionScissors();
    }
}

const earnMoneyScissors = () => {
    if (tools[0] === "scissors") {
        daysWorked++;
        money += 5;
        if (money >= 25) {
            checkForLawnMower();
        } else {
            alert("Keep working!");
            askForActionScissors();
        }
    }
}

const checkForLawnMower = () => {
    const lawnMowerUpgrade = prompt("Would you like to buy a push lawn mower and start making $50/day?", 'yes/no');
    if (lawnMowerUpgrade === 'yes') {
        buyLawnMower();
        askForActionLawnMower();
    } else if (scissorsUpgrade === 'no') {
        alert("Think again!");
        askForActionScissors();
    } else {
        alert("Keep working!");
    }
}

const buyLawnMower = () => {
    money -= 25;
    tools.pop();
    tools.push("push lawn mower");
    alert("Major improvement: your push lawn mower will help you make $50/day!");
}

const showStatusLawnMower = () => {
    alert("You have $ " + money + " and this tool to work with: " + tools[0] + " for $50/day");
}

const askForActionLawnMower = () => {
    showStatusLawnMower(); 
    const choiceLawnMower = prompt("Would you like to make 10 times more money with your new lawn mower?", "yes/no");
    if(choiceScissors === 'yes'){
        earnMoneyLawnMower();
    } else if(choiceScissors === 'no'){
        alert("Don't be lazy! There's money to make!");
        askForActionLawnMower();
    } else {
        alert("Try again!");
        askForActionLawnMower();
    }
}

const earnMoneyLawnMower = () => {
    if (tools[0] === "push lawn mower") {
        daysWorked++;
        money += 50;
        if (money = 250) {
            alert("You've won!")
        } else {
            alert("Keep working!");
            askForActionLawnMower();
        }
    }
}

start();

//I have kind of brute-forced my way for the user to go to each next level: from teeth to scissors and so on
//I have a hard time figuring out how to let him stay at a certain level as log as he wants
//I also see that I am repeating myself on a larger scale - renaming functions for each level, but they are essentially doing the same thing
//I understand that repetition needs to be looped, but I can't figure out how - need more time for refactoring that.
//I set the winning condition at 250 to test the idea itself.
//This is incomplete and needs improvement, but I am able to move from level to level.









