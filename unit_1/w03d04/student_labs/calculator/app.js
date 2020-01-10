$(() => {
  // verify that the user can click buttons
  $("button").on("click", event => {
    console.log(event);
    console.log($(event.currentTarget));
  });

  // capture user input

  $(".number").on("click", event => {
    const inputValue = event.target.textContent;
    console.log(inputValue);
    // we grab the value from the input box
    //console.log(inputValue); // we log the value to make sure that it works
  });
  // save user input in a variable as a string
  // convert the string to a number
  // save it as a number
  // capture the operator input
  // save it as a variable
  // (repeat lines 2 - 5) - get another operand from the user
  // perform the calculation with the received input
  // get the result
  // display it to the user
});
