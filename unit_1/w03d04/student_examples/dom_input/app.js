$(() => {
  $("form").on("submit", event => {
    event.preventDefault();
    //console.log("clicked");
    const $inputBox = $("#input-box");
    const inputValue = $inputBox.val();
    console.log(inputValue);

    const listItem = $("<li>");
    listItem.text(inputValue);
    $("ul").append(listItem);

    $(event.currentTarget).trigger("reset");
  });

  $("li").on("click", () => {
    console.log("clicked");
  });
  $("body").on("click", "li", event => {
    //target the body, find the instances of list items that were added after the fact, and set a click event on it
    console.log(event.currentTarget);
    $(event.currentTarget).css("text-decoration", "line-through");
  });
});
