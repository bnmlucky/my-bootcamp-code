$(() => {
  //console.log("JQuery loaded");
  const addH2 = () => {
    const $body = $("body");
    let $h2 = $("<h2>");
    $h2.text("Just getting started");
    $body.prepend($h2);
  };

  addH2();

  const changeH2 = () => {
    const $h2 = $("h2");
    $("h2").text("Getting warmed up");
  };

  changeH2();

  const randomColorRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const generateQuilt = () => {
    const $containerDiv = $("#container");

    for (let i = 0; i <= 1000; i++) {
      const $square = $("<div>");
      //create it a 1000 times;
      $square.attr("class", "square");
      $square.text(`${i}`);
      $square.css("background-color", randomColorRGB());
      $containerDiv.append($square);
    }
  };
  generateQuilt();
});
