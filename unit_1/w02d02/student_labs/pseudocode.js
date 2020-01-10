/*Are there waffles ready to eat? (Boolean)
//Is there syrup in the fridge (Boolean)

//If (Conditional) there are waffles & syrup (Boolean), then(function):
// step1: take syrup out of the fridge (function)
// step 2: warm the syrup before using it (function)
// step 3: open the lid on the syrup (function)
// step 4: pour the syrup on top of waffle (function)


//If there are no waffles, make waffles first (function)
1) check if there are any in the freezer (Boolean)
if (conditional) yes - warm up
    if no - bake new ones
    to bake new ones take ingredients and follow instructions (a separate function)
then put syrup on them (see function above)


// If there is no syrup, go get it at the store (function)
then put syrup on waffles (see function in second paragraph)
*/

//assumptions:
// waffles are already on the plate if they exist
// if they don't, the preparation process includes getting them 
// from a freezer, putting them on a plate and warming them up

console.log("Javascript is running");

const wafflesExist = prompt('Got waffles?', 'yes/no'); //ask the user
const syrupExists = prompt('Got syrup?', 'yes/no');  //ask the user

const getWaffles = () => {
    alert('1. Go to the fridge. 2. Get\'em out. 3.Microwave on high for 1 minute');
  }
  
  const getSyrup = () => {
     alert('1. Stop now and turn around. 2. Get your wallet and go to the store. 3. Get syrup and don\'t forget to come home');
  }
  
  const addSyrup = () => {
     alert('1. Get the syrup out of the fridge. 2. Warm it up a little bit. 3. Pour it on the waffle!');
  }

if(wafflesExist === 'yes' && syrupExists === 'yes') {
    addSyrup()
} else if (wafflesExist === 'no' && syrupExists === 'yes') {
    getWaffles()
} else if (wafflesExist === 'yes' && syrupExists === 'no') {
    getSyrup()
} else if (wafflesExist === 'no' && syrupExists === 'no') {
    getSyrup();
    getWaffles();
} else {
    alert('Could you say that again?', 'yes/no');
}

