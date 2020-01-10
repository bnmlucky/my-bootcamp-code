const startArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let divisibleByTwo = startArray.filter((num) => {
    return num % 2 === 0;
});
console.log(divisibleByTwo);

let divisibleByTwoAndThree = startArray.filter((num) => {
    if (num % 2 === 0 && num % 3 === 0) {
        return num
    }
})

console.log(divisibleByTwoAndThree)

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

// const coolBirds = birds.filter((eachBird) => {
//     if (eachBird.isCool) {
//         return eachBird;
//     }
// })

// console.log(coolBirds);

const { isCool } = birds;
let coolBirds = birds.filter(eachBird => {
    if (isCool) return eachBird;
});
console.log(coolBirds);