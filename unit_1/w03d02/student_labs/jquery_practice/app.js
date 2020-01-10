$(() => {
  console.log("Javascript is running");
  console.log($);
  console.log($("body"));

  const $div = $("<div>");
  $div.attr("id", "top-container");
  $("body").append($div);
  console.log($div);

  const $h1 = $("<h1>").text("Trois couleurs: rouge, blanc et bleu");
  //$("div").append($h1);
  $div.append($h1);

  const $div1 = $("<div>");
  $div1.addClass("couleur");
  $div.append($div1);

  const $div2 = $("<div>");
  $div2.addClass("couleur");
  $div.append($div2);

  const $div3 = $("<div>");
  $div3.addClass("couleur");
  $div.append($div3);

  //$div1
});
