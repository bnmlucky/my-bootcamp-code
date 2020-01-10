const numArr = [1, 2, 3, 4, 5, 6, ,7 , 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const filteredNum = numArr.filter((num) => {
  return (num % 2 === 0 && num % 3 === 0);
});

console.log('Filtered', filteredNum);

const birds = [
  {
      type: 'Vulture',
      isCool: true
  },
  {
      type: 'Eagle',
      isCool: true
  },
  {
      type: 'Pigeon',
      isCool: false
  },
  {
      type: 'Duck',
      isCool: false
  },
]

const coolBirds = birds.filter((eachBird) => {
  // if (eachBird.isCool === true) {
    //   return eachBird;
    // }
    const { isCool } = eachBird;
  if (isCool === true) return eachBird;
});

console.log(coolBirds);