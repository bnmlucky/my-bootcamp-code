$(() => {
  //jQuery code goes here

  if (typeof $ == "undefined") {
    console.log("oops! I still have to link my jQuery properly!");
  } else {
    console.log("I did it! I linked jQuery and this js file properly!");
  }

  console.log($);

  const $div = $("<div>");
  console.log($div);
  console.log($("body"));
  $("body").append($div);
  $div.addClass("meat");
  const $h3 = $("<h3>").text("Ostrich");
  $div.append($h3);

  const $div1 = $("<div>");
  $("body").append($div1);
  $div1.addClass("candy");
  const $h3_1 = $("<h3>").text("Chocolate");
  $div1.append($h3_1);

  const $div2 = $("<div>");
  $div2.addClass("drinks");
  $("body").prepend($div2);

  // const $meat = $(".meat");
  // $meat.remove();

  const $image = $("<img/>").attr(
    "src",
    "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
  );
  $image.attr("alt", "Cheese!");
  console.log($image);
  $("body").prepend($image);
});

const $divs = $("div");
$divs
  .eq(2)
  .children()
  .text("Kohlrabi");

const $h3_2 = $("<h3>").text("Sushi");
$divs.eq(2).empty();
$(".vegetable").append($h3_2);
