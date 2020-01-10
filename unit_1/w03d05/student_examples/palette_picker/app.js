$(() => {
  console.log("app.js loaded for palette picker");

  const randomColorRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  $("#generate").on("click", () => {
    $("#color-palette").empty();
    $("#my-palette").empty();
    for (i = 0; i <= 150; i++) {
      const $square = $("<div>")
        .addClass("square")
        .attr("id", `${i}`);
      $square.css("background-color", randomColorRGB());
      $square.appendTo("#color-palette");
    }
  });

  $("#color-palette").on("click", "div", event => {
    const targetSquare = $(event.currentTarget).css("background-color");
    const $newsquare = $("<div>").addClass("square");
    $newsquare.css(
      "background-color",
      $(event.currentTarget).css("background-color")
    );
    $("#my-palette").append($newsquare);
  });
});
