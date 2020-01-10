$(() => {
  //console.log("jQuery is working");

  $("form").on("click", () => {
    $("#container").empty();
    
    const $numSq = $("#inputBox").val();
    console.log($numSq);
    makeSquares($numSq);
    event.preventDefault();
  });

  const makeSquares = num => {
    const changeColor = event => {
      $(event.currentTarget).addClass("pink");
    };

    for (let i = 0; i < num; i++) {
      const $div = $("<div>").addClass("square");
      $("#container").append($div);
      $div.on("mouseover", changeColor);
    }
  };
});
