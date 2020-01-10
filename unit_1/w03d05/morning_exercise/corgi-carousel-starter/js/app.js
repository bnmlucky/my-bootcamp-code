$(() => {
  console.log("corgi carousel connected to app.js!");
  console.log("jQuery is working");

  let currentImgIndex = 0;
  let highestIndex = $(".carousel-images").children().length - 1;

  $(".next").on("click", () => {
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");
    currentImgIndex++;

    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");

    if (currentImgIndex < highestIndex) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }
  });

  //   $(".previous").on("click", () => {
  //     if (currentImgIndex > 0) {
  //       currentImgIndex--;
  //     } else {
  //       currentImgIndex = highestIndex;
  //     }
  //     $(".carousel-images")
  //       .children()
  //       .eq(currentImgIndex)
  //       .css("display", "none");
  //     // currentImgIndex--;
  //     $(".carousel-images")
  //       .children()
  //       .eq(currentImgIndex)
  //       .css("display", "block");
  //   });
});
