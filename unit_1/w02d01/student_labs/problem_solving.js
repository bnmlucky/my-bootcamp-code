const printGreeting = (name) => {
    return(`Hello there, ${name}!`);
}
console.log(printGreeting('Slimer'));

const reverseWordOrder = (str) => {
    const splitString = str.split(' ');
    //console.log(splitString);
    //const newArray = [];
    const reverseArray = splitString.reverse(); //somehow that didn't work for me... why?
    //console.log(reverseArray);
    const finalreverseArray = reverseArray.join(" "); //this is to get rid of commas separating the array items in a string.
    return finalreverseArray;
    //for (let i = splitString.length - 1; i >= 0; i-- ) {
    //   newArray.push(splitString[i]);
    //}
}
console.log(reverseWordOrder("The swimming practice is over"));

