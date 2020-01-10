// const adventurer = {
//     name: 'Timothy',
//     hitpoints: 10,
//     belongings: ['sword', 'potion', 'Tums']
// }

// console.log(adventurer.belongings);
// console.log(adventurer.belongings[0]);

// for (let i=0; i < adventurer.belongings.length; i++) {
//     const currentBelonging = adventurer.belongings[i];
// 	console.log(currentBelonging);
// }

// const adventurer1 = {
//     name: 'Timothy',
//     hitpoints: 10,
//     belongings: ['sword', 'potion', 'Tums'],
//     companion: {
//         name: 'Velma',
//         type: 'Bat'
//     }
// }

// console.log(adventurer1.companion.name);
// console.log(adventurer1.companion.type);

// const adventurer1 = {
//     name: 'Timothy',
//     hitpoints: 10,
//     belongings: ['sword', 'potion', 'Tums'],
//     companion: {
//         name: 'Velma',
//         type: 'Bat'
//     }
// }

// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ['sword', 'potion', 'Tums'],
// 	companion: {
// 		name: 'Velma',
// 		type: 'Bat',
// 		companion: {
// 			name: 'Tim',
//             type: 'Parasite',
//             belongings: ['SCUBA tank', 'Rogan josh', 'health insurance']
// 		}  
// 	}
// }

// console.log(adventurer.companion.companion.type);
// console.log(adventurer.companion.companion.belongings[2]);

// const movies = [ { title: 'Tokyo Story' },  { title: 'Paul Blart: Mall Cop' }, { title: 'L\'Avventura' } ];
// console.log(movies[0]);
// console.log(movies[0].title);

// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }

//  const movie = { title: 'L\'Avventura', director: 'Michelangelo Antonioni', year: 1960 }
// // for (let key in movie) { //let is necessary, although it runs without
// // 	console.log(movie[key]); //access the value of each key
// // }

// console.log(Object.keys(movie));
// const keys = Object.keys(movie);

// for (let i = 0; i < keys.length; i++) {
//     console.log(movie[keys[i]]);
// }

// const foo = {
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };

// console.log(foo.someMethod);
// foo.someMethod();
// //logs 'oh hai!

// const foo = [{someProperty:'weee'}, 2, 3];

// console.log(foo[0].someProperty);

// const foo = [
//     ['0,0', '0,1', '0,2'],
//     ['1,0', '1,1', '1,2'],
//     ['2,0', '2,1', '2,2']
// ];

// console.log(foo[1][2]);

// const foo = {
//     someArray: [1, 2, 3]
// }

// for (let element of foo.someArray) {
//     console.log(element)
// }

// for (let i = 0; i < foo.someArray.length; i++) {
//     console.log(foo.someArray[i]);
// }

// for ... in - objects
// for ... of  - arrays
// for of vs for loop - you go through the whole loop with "for of", but you can break out of it if there is a condition on a for loop
// regular for loop when you need an index and a different increment than one

// const foo = [
//     ['0,0', '0,1', '0,2'],
//     ['1,0', '1,1', '1,2'],
//     ['2,0', '2,1', '2,2']
//   ]
  
//   for (let row of foo) {
//     for (let element of row) {
//       console.log(element)
//     }
//   }
  
//   //same as above
//   for (let i = 0; i < foo.length; i++) {
//     for (let j = 0; j < foo[i].length; j++) {
//       console.log(foo[i][j])
//     }
//   }

// const foo = () => {
//     return {
//         someProperty: 'hi!' //this is an object
//     }
// }
// const bar = foo()
// console.log(bar.someProperty)
// console.log(foo());
// console.log(foo().someProperty);

// const foo = () => {
//     return['apple', 'banana', 'pear']
// }
// const bar = foo()

// console.log(bar[1]);
// console.log(foo()[1]); //since foo() and bar are the same

// const adventurer = {
//     name: 'Timothy',
//     hitpoints: 10,
//     belongings: ['sword', 'potion', 'Tums'], 
//     companion: {
//         name: 'Velma',
//         type: 'Bat',
//         companion: {
//             name: 'Tim',
//             type: 'Parasite',
//             belongings: ['SCUBA tank', 'Rogan josh', 'health insurance']
//         }
//     }
// }

// console.log(adventurer.belongings);

// console.log(adventurer.belongings[0]);

// for (let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.type);
// console.log(adventurer.companion.companion.type);
// console.log(adventurer.companion.companion.belongings[2]);

// const movies = [{title: 'Tokyo Story'}, {title: 'Paul Blart: Mall Cop'}, { title: 'L\'Avventura' }];
// console.log(movies[0]);
// console.log(movies[0].title);
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
// }

// const monster = {
//     name: 'Slimer',
//     age: 6
// }

// const someVar = 'name';
// console.log(monster[someVar]);

// const movie = {title: 'L\'Avventura', director: 'Michelangelo Antonioni', year: 1960}
// for (let key in movie) {
//     console.log(key);
// }
// for (let key in movie) {
//     console.log(movie[key]);
// }
// console.log(Object.keys(movie));

// const keys = Object.keys(movie);
// for (let i = 0; i < keys.length; i++) {
//     console.log(movie[keys[i]]);
// }

// const foo = {
//     someArray: [1, 2, 3]
// };
// console.log(foo.someArray[0]);

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// console.log(foo.someObject.someProperty);

// const foo = {
//     someMethod: () => {
//         console.log('oh hai');
//     }
// };

// foo.someMethod();

// const foo = [{someProperty: 'weee'}, 2, 3];
// console.log(foo[0].someProperty);

// const foo = [
//     ['0,0', '0,1', '0,2'],
//     ['1,0', '1,1', '1,2'],
//     ['2,0', '2,1', '2,2']
// ]

// console.log(foo[1][2]);

// const foo = {
//     someArray: [1, 2, 3]
// }

// for (let element of foo.someArray) {
//     console.log(element)
// }

// for (let i = 0; i < foo.someArray.length; i++) {
//     console.log(foo.someArray[i])
// }

// const foo = [
//     ['0,0', '0,1', '0,2'],
//     ['1,0', '1,1', '1,2'],
//     ['2,0', '2,1', '2,2']
// ]
// for (let row of foo) {
//     for (let element of row) {
//         console.log(element)
//     }
// }
// for (let i = 0; i < foo.length; i++) {
//     for (let j = 0; j < foo[i].length; j++) {
//         console.log(foo[i][j])
//     }
// }

// const foo = () => {
//     return {
//         someProperty: 'hi!'
//     }
// }
// const bar = foo();
// console.log(bar.someProperty);

// const foo = () => {
//     return ['apple', 'banana', 'pear']
// }
// const bar = foo()

// console.log(bar[1]);

// const foo = () => {
//     return {
//         someArray: ['fun', 'awesome', 'sweet']
//     }
// }

// const bar = foo()
// console.log(bar.someArray[1]);

// const foo = () => {
//     return {
//         someObject: {
//             someProperty: 'some value'
//         }
//     }
// }

// const bar = foo()
// console.log(bar.someObject.someProperty);

// const foo = () => {
//     return {
//         someMethod: () => {
//             console.log('oh hai!')
//         }
//     }
// }
// const bar = foo();
// console.log(bar.someMethod());

// const foo = () => {
//     return () => {
//         console.log('whaaaa?')
//     }
// }
// const bar = foo()
// console.log(bar());

// const foo = {
//     someMethod: () => {
//         return {
//             someProperty: 'some value'
//         }
//     }
// }

// const bar = foo.someMethod();
// console.log(bar.someProperty);

// const foo = {
//     someMethod: () => {
//         return {
//             someArray: ['peach', 'apple', 'pear']
//         }
//     }
// }
// const bar = foo.someMethod();
// console.log(bar.someArray[2]);

// const foo = {
//     someMethod: () => {
//         return {
//             someObject: {
//                 someProperty: 'some value'
//             }
//         }
//     }
// }
// const bar = foo.someMethod();
// console.log(bar.someObject.someProperty);

// const foo = {
//     someMethod: () => {
//         return {
//             someMethod: () => {
//                 console.log('both methods can have the same name!')
//             }
//         }
//     }
// }
// const bar = foo.someMethod();
// bar.someMethod();

const foo = {
    someMethod: () => {
        return () => {
            console.log('hi')
        }
    }
}
const bar = foo.someMethod();
bar();