const arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, -80, 90]
];
console.log(arr[0][0]);
console.log(arr[1][0]);
console.log(arr[2][0]);

let currentSum = 0;
let largestSum = 0;
for (let i = 0; i < arr.length; i++) {   
  for (let j = 0; j < arr[i].length; j++) {
    // console.log(arr[i][j]);
    currentSum += arr[i][j];
    if (currentSum > largestSum) {
      largestSum = currentSum;
    } else {
      currentSum = 0;
    }

  }
  // currentSum += arr[i][0];

}
console.log(currentSum, largestSum)

