// let wordArray = [];
// const capitalize = (word) => {
//     wordArray.push(word.split());
//     wordArray.push(wordArray[0].toUpperCase());
//     word = (wordArray.join(''));
//     console.log(word);
// }
// capitalize("cat");

// make an array of symbols out of the word?
// check if the first item in this array is capitalized?
// toUpperCase
// convert the array back to 1 word

//CharAt() - returns the character at the specified index
//.split() - splits a string into an array of substrings
//.startsWith() - checks whether a string begins with specified characthers

// const capitalize = word => {
//     let array = word.split("");
//     let a = array[0].toUpperCase();
//     let str = '';
//     array.shift();
//     array.unshift(a);
//     for (let i = 0; i < array.length; i++) {
//         str = str + array[i];
//     }
//     console.log(str);
// }
// capitalize('hello'); - this is working

const capitalize = word => {
  let array = word.split("");
  let updatedWord = "";
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      updatedWord = array[i].toUpperCase();
    } else {
      updatedWord += array[i];
    }
  }
};
capitalize("hey");
console.log(updatedWord);
// this is not working
