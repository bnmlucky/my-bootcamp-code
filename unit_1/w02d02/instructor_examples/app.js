// const yourAnswer = prompt('Do you like apples?', 'yes/no');

// if (yourAnswer === 'yes') {
//   alert('Excellent!');
// } else if (yourAnswer === 'no') {
//   alert('What?!?! How can you not like apples?!');
// } else {
//   alert('Does not compute');
// }

// const greet = () => {
//   alert('Hi!');
// };

// const sayBye = () => {
//   alert('Bye!');
// };

// const answer = prompt('Are you arriving or leaving', 'Arriving or Leaving');

// if (answer.toLowerCase() === 'arriving') {
//   greet();
// } else if (answer === 'leaving') {
//   sayBye();
// } else if (answer === undefined) {
//   alert('I do not understand');
// } else {
//   console.log(answer);
// }

// const func1 = () => {
//   console.log(1);
//   func2();
//   func3();
//   console.log('Finished');
// };

// const func2 = () => {
//   console.log(2);
//   func4();
//   func6();
// };

// const func3 = () => {
//   console.log(3);
//   func5();
// };

// const func4 = () => {
//   console.log(4);
// };

// const func5 = () => {
//   console.log(5);
// };

// const func6 = () => {
//   console.log(6);
// };

// func2();

// 1, 2, 4

// 1, 2, 4, 5, 3, 5, Finished

// 1, 2, 4, 3, 5, Finished

// 1, 2, 4, 6, 3, 5

// 1, 2, 4, 6, 3, 5, Finished

let apples = 0;
let money = 20;

const showStatus = () => {
  alert(`You have ${apples} apples and $ ${money}`);
};

const start = () => {
  apples = 0;
  money = 20;
  askForAction();
};

const askForAction = () => {
  showStatus();
  const choice = prompt(
    'What do you want to do?',
    '(buy) apple/ (eat) apple/ restart'
  );

  if (choice === 'buy') {
    buyApple();
  } else if (choice == 'eat') {
    eatApple();
  } else if (choice === 'restart') {
    start();
  } else {
    alert('error');
  }
};

const buyApple = () => {
  apples++;
  money -= 1;
  askForAction();
};

const eatApple = () => {
  apples--;
  askForAction();
};

start();
