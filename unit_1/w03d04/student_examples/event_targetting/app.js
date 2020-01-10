$(() => {
  //wait until the DOM is loaded and then run whatever is in there
  //console.log($(".card"));
  $(".card").on("click", event => {
    // console.log(event.currentTarget);
    //$(".card").toggleClass("card-back");
    $(event.currentTarget).toggleClass("card-back");
  });
});
