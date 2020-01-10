// const capitalize = word => {
//   let updatedWord = '';
//   for (let i = 0; i < word.length; i++) {
//     if (i === 0) {
//       updatedWord += word[i].toUpperCase();
//     } else {
//       updatedWord += word[i];
//     }
//   }
//   console.log(updatedWord);
// };

// const capitalize = word => {
//   const firstCharacter = word.slice(0, 1).toUpperCase();
//   word = firstCharacter + word.slice(1);
//   console.log(word);
// };

// const capitalize = word => {
//   let upper = word.split('');
//   upper[0] = upper[0].toUpperCase();
//   console.log(upper.join(''));
// };

// const capitalize = word => {
//   let array = word.split('');
//   let a = array[0].toUpperCase();
//   let str = '';
//   array.shift();
//   array.unshift(a);
//   for (let i = 0; i < array.length; i++) {
//     str = str + array[i];
//   }
//   console.log(str);
// };

const capitalize = word => {
  let array = word.split('');
  let updatedWord = '';
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      updatedWord = array[i].toUpperCase();
    } else {
      updatedWord += array[i];
    }
  }
  console.log(updatedWord);
};

capitalize('hello');
