let cartTotal = 16.07;
let roundedUpCart = Math.floor(cartTotal);
let donation = (roundedUpCart - cartTotal).toFixed(2);
console.log(donation);