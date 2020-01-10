$(() => {
  console.log("jQuery connected");

  let globalToggle = true;

  const xWinner = () => {
    $("<p>")
      .text("X wins!")
      .css("font-size", "36px")
      .appendTo("#container");
  };

  const oWinner = () => {
    $("<p>")
      .text("O wins!")
      .css("font-size", "36px")
      .appendTo("#container");
  };

  const checkForWin = () => {
    const space0x = $("#square0").is(":contains('x')");
    const space1x = $("#square1").is(":contains('x')");
    const space2x = $("#square2").is(":contains('x')");

    const space0o = $("#square0").is(":contains('o')");
    const space1o = $("#square1").is(":contains('o')");
    const space2o = $("#square2").is(":contains('o')");

    const space3x = $("#square3").is(":contains('x')");
    const space4x = $("#square4").is(":contains('x')");
    const space5x = $("#square5").is(":contains('x')");

    const space3o = $("#square3").is(":contains('o')");
    const space4o = $("#square4").is(":contains('o')");
    const space5o = $("#square5").is(":contains('o')");

    const space6x = $("#square6").is(":contains('x')");
    const space7x = $("#square7").is(":contains('x')");
    const space8x = $("#square8").is(":contains('x')");

    const space6o = $("#square6").is(":contains('o')");
    const space7o = $("#square7").is(":contains('o')");
    const space8o = $("#square8").is(":contains('o')");

    if (space0x && space1x && space2x === true) {
      xWinner();
    } else if (space0o && space1o && space2o === true) {
      oWinner();
    } else if (space0x && space4x && space8x === true) {
      xWinner();
    } else if (space0o && space4o && space8o === true) {
      oWinner();
    } else if (space0x && space3x && space6x === true) {
      xWinner();
    } else if (space0o && space3o && space6o === true) {
      oWinner();
    } else if (space1x && space4x && space7x === true) {
      xWinner();
    } else if (space1o && space4o && space7o === true) {
      oWinner();
    } else if (space2x && space4x && space6x === true) {
      xWinner();
    } else if (space2o && space4o && space6o === true) {
      oWinner();
    } else if (space2x && space5x && space8x === true) {
      xWinner();
    } else if (space2o && space5o && space8o === true) {
      oWinner();
    } else if (space3x && space4x && space5x === true) {
      xWinner();
    } else if (space3o && space4o && space5o === true) {
      oWinner();
    } else if (space6x && space7x && space8x === true) {
      xWinner();
    } else if (space6o && space7o && space8o === true) {
      oWinner();
    }
  };

  const tic = () => {
    //console.log("it clicks!");
    $(event.currentTarget).removeClass("square");
    if (globalToggle) {
      $(event.currentTarget)
        .text("x")
        .addClass("xo-square")
        .val("x");
    } else {
      $(event.currentTarget)
        .text("o")
        .addClass("xo-square");
    }
    globalToggle = !globalToggle;
    checkForWin();
  };

  //checkForWin();

  const generateSquares = () => {
    for (i = 0; i < 9; i++) {
      const $square = $("<div>")
        .addClass("square")
        .attr("id", `square${i}`)
        .val(`${i}`);
      $square.appendTo("#container");
    }
    $(".square").one("click", tic);
  };
  generateSquares();
});
