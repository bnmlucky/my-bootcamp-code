// if (typeof jQuery == "undefined") {
//   console.log("oops! I still have to link my jQuery properly!");
// } else {
//   console.log("I did it! I linked jQuery and this js file!");
// }
$(() => {
  const $container = $("#container");
  console.log($container);

  const $h1 = $("<h1>").text("Hogwarts");
  console.log($h1);
  $("div").append($h1);

  const $h2 = $("<h2>").text("Natalia");
  $("div").append($h2);

  const $h3 = $("<h3>").text("Ravenclaw");
  $("div").append($h3);

  const $h4 = $("<h4>").text("Yoga");
  $h4.addClass("cat");
  $("div").append($h4);

  const $h4_0 = $("<h4>").text("My wand is Birchwood Knowledge Seeker");
  $("div").append($h4_0);

  const $ul = $("<ul>");
  $ul.attr("storage", "trunk");
  $("div").append($ul);

  const $li = $("<li>").text("butter beer");
  $ul.append($li);

  const $li1 = $("<li>").text("invisibility cloak");
  $li1.addClass("secret");
  $ul.append($li1);

  const $li2 = $("<li>").text("magic map");
  $li2.addClass("secret");
  $ul.append($li2);

  const $li3 = $("<li>").text("time turner");
  $li3.addClass("secret");
  $ul.append($li3);

  const $li4 = $("<li>").text("leash");
  $li4.addClass("cat");
  $ul.append($li4);

  const $li5 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");
  $ul.append($li5);

  const $h5 = $("<h5>").text("Spring 2019");
  $("div").append($h5);

  const $table = $("<table>");
  $("div").append($table);

  const $thead = $("<thead>");
  $table.append($thead);

  const $th = $("<th>").text("Day");
  $thead.append($th);

  const $th1 = $("<th>").text("Classes");
  $thead.append($th1);

  const $tr = $("<tr>");
  $table.append($tr);

  const $td = $("<td>").text("Monday");
  $tr.append($td);

  const $td1 = $("<td>").text("Herbology, Divination, History of Magic");
  $tr.append($td1);

  // creating a new table row here

  const $tr1 = $("<tr>");
  $table.append($tr1);

  const $td2 = $("<td>").text("Tuesday");
  $tr1.append($td2);

  const $td3 = $("<td>").text("Divination, History of Magic, Charms");
  $tr1.append($td3);

  // creating a new table row here

  const $tr2 = $("<tr>");
  $table.append($tr2);

  const $td4 = $("<td>").text("Wednesday");
  $tr2.append($td4);

  const $td5 = $("<td>").text("History of Magic, Charms, Potions");
  $tr2.append($td5);

  // creating a new table row here

  const $tr3 = $("<tr>");
  $table.append($tr3);

  const $td6 = $("<td>").text("Thursday");
  $tr3.append($td6);

  const $td7 = $("<td>").text("Charms, Potions, Transfiguration");
  $tr3.append($td7);

  // creating a new table row here

  const $tr4 = $("<tr>");
  $table.append($tr4);

  const $td8 = $("<td>").text("Friday");
  $tr4.append($td8);

  const $td9 = $("<td>").text(
    "Potions, Transfiguration, Defense Against the Dark Arts"
  );
  $tr4.append($td9);

  const $h4s = $("h4");
  console.log($h4s);
  $h4s.eq(1).remove(); //I removed my wand

  const $lis = $("li");
  console.log($lis);
  $lis.eq(0).remove(); //I drank my butter beer

  const $linewwand = $("<h4>").text("My wand is Dragonglass Knowledge Rod");
  $linewwand.insertAfter($h4);
  $linewwand.css("color", "indigo");

  $h4.remove();

  const $h4_back = $("<h4>").text("Yoga");
  $h4_back.addClass("cat");
  $h4_back.insertAfter($h3); //brought the pet back to where I took her from

  $(".secret")
    .hide("slow")
    .delay(2000);
  $(".secret").show("slow");

  $li4.addClass("cabbage");

  $li4.removeClass("cabbage");

  $h5.text("Fall 2020");

  const $limorebeer = $("<li>").text("butter beer");
  $ul.prepend($limorebeer);
  $limorebeer.attr("id", "trunk");
  $ul.attr("storage", "chest");
});
