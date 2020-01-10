$(() => {
  const $colorPalette = $("#color-palette");
  const $generate = $("#generate");

  const createSquare = () => {
    const $square = $("<div>");
    $square.addClass("square");
    const randomColor = createRandomColor();
    $square.css("background", randomColor);
    return square;
  };

  const makePalette = () => {
    $colorPalette.empty();
    for (let i = 0; i < 150; i++) {
      const $square = createSquare();
      $colorPalette.append($square);
    }
  };
  const randomColorRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
    return color;
  };
  $generate.on("click");
});
