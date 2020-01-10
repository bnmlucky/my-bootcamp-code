// const yourAnswer = prompt('Some questioDo you like apples?', 'yes or no');

// if (yourAnswer.toLowerCase() === 'yes') {
//     alert('Excellent!');
// } else if (yourAnswer.toLowerCase() === 'no') {
//     alert('What?!? How can you not like apples?');
// } else {
//     alert('Does not compute');
// }

// const greet = () => {
//     alert('Hi!');
// }
// const sayBye = () => {
//     alert('Bye!');
// }
// const answer = prompt('Are you arriving or leaving', 'Arriving or Leaving?');

// if(answer === "Arriving") {
//     greet();
// } else if(answer === "Leaving") {
//     sayBye();
// } else {
//     alert('I do not understand');
// }

// let action = null

// while(action !== "stop") {
//     action = prompt("What do you want to do", "Your action");
// }

// const greet = () => {
//     alert('Hi');
// }
// const sayBye = () => {
//     alert('Bye!')
// }
// const conversation = () => {
//     greet()
//     sayBye()
// }

// conversation()

// const func1 = () => {
//     console.log(1);
//     func2();
//     func3();
//     console.log('Finished!');
// }
// const func2 = () => {
//     console.log(2);
//     func4();
//     func6();
// }
// const func3 = () => {
//     console.log(3);
//     func5();
// }
// const func4 = () => {
//     console.log(4);
// }
// const func5 = () => {
//     console.log(5);
// }
// const func6 = () => {
//     console.log(6);
// }
// func1();

let apples = 0;
let money = 20;

const start = () => {
    apples = 0;
    money = 20;
    askForAction();
}

const askForAction = () => {
    showStatus();
    const choice = prompt("What do you want to do?", "(buy) apple / (eat) apple / (restart)");

    if(choice === 'buy'){
        buyApple();
    } else if(choice === 'eat') {
        eatApple();
    } else if(choice === 'restart') {
        start();
    } else {
        console.log('error error')
    }
}

const showStatus = () => {
    alert("You have " + apples + " apples and $ " + money);
}
const buyApple = () => {
    apples++;
    money -= 1;
    askForAction();
}
const eatApple = () => {
    apples--;
    askForAction();
}

start();