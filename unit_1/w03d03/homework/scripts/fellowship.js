console.log("LINKED");

// Dramatis Personae
const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

// Our Setting
const lands = ["The-Shire", "Rivendell", "Mordor"];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
<<<<<<< HEAD
  console.log("making Middle Earth");
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth

  const $sectionMiddleEarth = $("<section>").attr("id", "middle-earth");

  // 2. append the section to the body of the DOM.

  $("body").append($sectionMiddleEarth);

  // 3. use a for loop to iterate over the lands array that does the following:

  for (i = 0; i < lands.length; i++) {
    //   3a. creates an article tag (there should be one for each land when the loop is done)

    const $articleForLand = $("<article>");

    //   3b. gives each land article an `id` tag of the corresponding land name
    $articleForLand.attr("id", lands[i]);

    //   3c. includes an h1 with the name of the land inside each land article

    const $h1Land = $("<h1>").text(lands[i]);
    $articleForLand.append($h1Land);

    //   3d. appends each land to the middle-earth section
    $sectionMiddleEarth.append($articleForLand);
=======
  // console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  // 2. append the section to the body of the DOM.
  // 3. use a for loop to iterate over the lands array that does the following:
  
  //   3a. creates an article tag (there should be one for each land when the loop is done)
  
  //   3b. gives each land article an `id` tag of the corresponding land name
  
  //   3c. includes an h1 with the name of the land inside each land article
  
  //   3d. appends each land to the middle-earth section
  const $section = $('<section>').attr('id', 'middle-earth');
  $('body').append($section);
  // for (let land of lands) {
  //   const $article = $('<article>').attr('id', `${land}`);
  //   const $h1 = $('<h1>').text(`${land}`)
  //   $article.append($h1);
  //   $section.append($article);
  // }
  for (let i = 0; i < lands.length; i++) {
    const $article = $('<article>').attr('id', `${lands[i]}`);
    const $h1 = $('<h1>').text(`${lands[i]}`);
    $article.append($h1);
    $section.append($article);
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
  }
};

//makeMiddleEarth();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // 1. create a 'ul'
  const $hobbitsList = $("<ul>");
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  for (i = 0; i < hobbits.length; i++) {
    const $hobbit = $("<li>")
      .addClass("hobbit")
      .text(hobbits[i]);
    $hobbitsList.append($hobbit);
  }
  // hint: use the given 'hobbits' array and use a for loop
  // 3. also, give each hobbit (`li`) a class of "hobbit"
  // 4. append the ul to the shire
<<<<<<< HEAD

  // hint: get 'The-Shire' by using its id
  $("#The-Shire").append($hobbitsList);
=======
    // hint: get 'The-Shire' by using its id
  
    const $ul = $('<ul>');
    // for (let hobbit of hobbits) {
    //   const $li = $('<li>').text(`${hobbit}`).addClass('hobbit');
    //   $ul.append($li);
    // }
    for (let i = 0; i < hobbits.length; i++) {
      const $li = $('<li>').text(`${hobbits[i]}`).addClass('hobbit');
      $ul.append($li);
    }

    $('#The-Shire').append($ul);
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};

//makeHobbits();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // 1. create an empty div with an id of 'the-ring'

  const $ringDiv = $("<div>").attr("id", "the-ring");

  // 2. add the ring as a child of Frodo

<<<<<<< HEAD
  $(".hobbit")
    .eq(0)
    .append($ringDiv);

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
=======
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
  const $ring = $('<div>').attr('id', 'the-ring');
  $('.hobbit').eq(0).append($ring);
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};

//keepItSecretKeepItSafe();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
  const $baddiesList = $("<ul>");

  // 2. give each of the baddies a class of "baddy"

  for (i = 0; i < baddies.length; i++) {
    const $baddy = $("<li>")
      .addClass("baddy")
      .text(baddies[i]);
    $baddiesList.append($baddy);
  }
  // 3. remember to append the ul to Mordor
<<<<<<< HEAD

  $("#Mordor").append($baddiesList);
=======
  const $ul = $('<ul>');
  for (let bad of baddies) {
    const $li = $('<li>').text(`${bad}`).addClass('baddy');
    $ul.append($li);
  }
  $('#Mordor').append($ul);
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};

//makeBaddies();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // 1. create an aside tag and append it to middle-earth below mordor

  const $asideForBuddies = $("<aside>");
  $("#middle-earth").append($asideForBuddies);
  const $buddiesList = $("<ul>");
  for (i = 0; i < buddies.length; i++) {
    const $buddy = $("<li>")
      .addClass("buddy")
      .text(buddies[i]);
    $buddiesList.append($buddy);
  }

  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"
  // 4. don't forget to append them to the aside
  const $aside = $('<aside>');
  const $ul = $('<ul>')
  // for (let buddy of buddies) {
  //   const $li = $('<li>').text(`${buddy}`).addClass('buddy');
  //   $ul.append($li);
  // }
  for (let i = 0; i < buddies.length; i++) {
    const $li = $('<li>').text(`${buddies[i]}`).addClass('buddy');
    $ul.append($li);
  }
  $aside.append($ul);
  $('#middle-earth').append($aside);

  $asideForBuddies.append($buddiesList);
};

//makeBuddies();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  $("#The-Shire")
    .children()
    .eq(1)
    .appendTo("#Rivendell");

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  //Stretch: add an event handler/listener so that when you click on the `h1` The Shire, this function will be called (be sure to do it in the window.onload/document.ready function)
<<<<<<< HEAD
=======
  const $children = $('#The-Shire').children().eq(1);
  $('#Rivendell').append($children);
  // $children.appendTo('#Rivendell');  
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};

//leaveTheShire();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
<<<<<<< HEAD
  $("aside")
    .children()
    .children()
    .eq(3)
    .text("Aragorn");
  // hint: You can get a list of elements by tag name, such as 'aside'
=======
     // hint: You can get a list of elements by tag name, such as 'aside'
  $('.buddy').eq(3).text('Aragorn');
  
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};

//beautifulStranger();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'

  const $theFellowshipDiv = $("<div>").attr("id", "the-fellowship");

  // 2. add an h1 with the text 'The Fellowship' to this new div

  const $theFellH1 = $("<h1>").text("The Fellowship");
  $theFellowshipDiv.append($theFellH1);

  // 3. append the fellowship to middle-earth

  $("#middle-earth").append($theFellowshipDiv);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const $div = $('<div>').attr('id', 'the-fellowship');
  $div.append('<h1>The Fellowship</h1>');
  $('#middle-earth').append($div);

  const $hobbitUl = $('#Rivendell').children().eq(1);
  const $buddyUl = $('aside').children().eq(0);

<<<<<<< HEAD
  $("#Rivendell")
    .children()
    .eq(1)
    .appendTo($theFellowshipDiv);
  $("aside")
    .children()
    .appendTo($theFellowshipDiv);
=======
  $('#the-fellowship').append($hobbitUl);
  $('#the-fellowship').append($buddyUl);
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};

//forgeTheFellowShip();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'
<<<<<<< HEAD

  $("#the-fellowship")
    .children()
    .eq(2)
    .children()
    .eq(0)
    .text("Gandalf the White");
  // 2. add a class "the-white" to this element

  $("#the-fellowship")
    .children()
    .eq(2)
    .children(0)
    .addClass("the-white");

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
=======
  
  // 2. add a class "the-white" to this element
  
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
  $('.buddy').eq(0).text('Gandalf the White').addClass('the-white');
  
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};

//theBalrog();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // 1. create a pop-up alert that the horn of gondor has been blown
  const $hornBlown = alert("Horn of Gondor has been blown");

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  $("#the-fellowship")
    .children()
    .eq(2)
    .children()
    .eq(4)
    .css("text-decoration", "line-through");

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  alert('The Horn of Gondor has been blown!');
  $('.buddy').eq(4).css('text-decoration', 'line-through');
  const $urukHai = $('.baddy').eq(2);
  $urukHai.remove();

  $("#Mordor")
    .children()
    .children()
    .eq(2)
    .remove();
};

//hornOfGondor();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  $("#the-fellowship")
    .children()
    .eq(1)
    .children()
    .eq(0)
    .appendTo("#Mordor");

  $("#the-fellowship")
    .children()
    .eq(1)
    .children()
    .eq(0)
    .appendTo("#Mordor");
  // 2. add a div with an id of 'mount-doom' to Mordor
<<<<<<< HEAD

  const $mountDoom = $("<div>").attr("id", "mount-doom");
  $mountDoom.appendTo("#Mordor");
=======
  const $frodo = $('.hobbit').eq(0);
  const $sam = $('.hobbit').eq(1);
  const $mtDoom = $('<div>').attr('id', 'mount-doom');
  $('#Mordor').append($frodo).append($sam).append($mtDoom);
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};
//itsDangerousToGoAlone();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $gollumDiv = $("<div>").attr("id", "gollum");
  $("#Mordor").append($gollumDiv);

  // 2. Move the ring from Frodo and give it to Gollum
  $("#the-ring").appendTo("#gollum");

  // 3. Move Gollum into Mount Doom
<<<<<<< HEAD
  $("#gollum").appendTo("#mount-doom");
=======
  const $gollum = $('<div>').attr('id', 'gollum');
  $('#Mordor').append($gollum);
  const $theRing = $('#the-ring')
  $gollum.append($theRing);
  // $('#the-ring').appendTo($gollum);
  const $mountDoom = $('#mount-doom');
  // $gollum.appendTo('#mount-doom');
  $mountDoom.append($gollum);

>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};

//weWantsIt();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  // 1. remove Gollum and the Ring from the DOM
  $("#gollum").remove();
  // 2. remove all the baddies from the DOM
  $(".baddy").remove();
  // 3. Move all the hobbits back to the shire
<<<<<<< HEAD
  $("#Mordor")
    .children()
    .eq(2)
    .appendTo("#The-Shire");
  $("#Mordor")
    .children()
    .eq(2)
    .appendTo("#The-Shire");
  $("#the-fellowship")
    .children()
    .children()
    .eq(0)
    .appendTo("#The-Shire");
  $("#the-fellowship")
    .children()
    .children()
    .eq(0)
    .appendTo("#The-Shire");
=======
  $('#gollum').remove();
  $('.baddy').remove();
  const $theShire = $('#The-Shire');
  const $hobbit = $('.hobbit');
  $theShire.append($hobbit);
  // $('.hobbit').appendTo('#The-Shire');
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
};

//thereAndBackAgain();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

<<<<<<< HEAD
$(() => {
  $("#1").on("click", makeMiddleEarth);
  $("#2").on("click", makeHobbits);
  $("#3").on("click", keepItSecretKeepItSafe);
  $("#4").on("click", makeBaddies);
  $("#5").on("click", makeBuddies);
  $("#6").on("click", leaveTheShire);
  $("#7").on("click", beautifulStranger);
  $("#8").on("click", forgeTheFellowShip);
  $("#9").on("click", theBalrog);
  $("#10").on("click", hornOfGondor);
  $("#11").on("click", itsDangerousToGoAlone);
  $("#12").on("click", weWantsIt);
  $("#13").on("click", thereAndBackAgain);
=======


$(()=>{
  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

  // Bonus task for Chapter 6
  // When adding an event listener to a dynamically created
  // element, we have to attach the listener to a static parent
  // and specify the dynamic child
  // $('body').on('click', '#The-Shire h1', leaveTheShire);
  //
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
});
