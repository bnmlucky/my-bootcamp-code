/*for (let i = 1; i <= 5; i++) {
    console.log('Walking east one step', i);
}
*/

//loop through the numbers from 0 - 10
//check if each of the new i values is even 
//if it is, add it to a variable even_sum that at first will be intialized to 0
//when done looping, print the final value of the even_sum variable

let sum  = 0;
for (i = 0; i <= 10; i++) {
    if (i % 2 == 0){
        sum += i;
    }
}
console.log(sum);

