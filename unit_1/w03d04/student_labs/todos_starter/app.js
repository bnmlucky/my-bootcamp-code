$(() => {
  // DOM stuff
  console.log("jQuery is working");

  const $toDoUl = $("<ul>").appendTo("#to-do-list");

  //   const $addListItem = () => {
  //     event.preventDefault();
  //     const $inputValue = $("#input-box").val();
  //     console.log($inputValue);
  //     const $listItem = $("<li>").addClass("to-do-item");
  //     $listItem.text($inputValue);
  //     const $listButton = $("<button>").text("COMPLETED");
  //     $listItem.append($listButton);
  //     $($toDoUl).append($listItem);
  //     $(event.currentTarget).trigger("reset");
  //   };
  // I tried to make constructing a list item a separate function.  This did not work. Why?
  // Could not call it from inside these functions down below.

  $("form").on("submit", event => {
    // //console.log("clicked");
    event.preventDefault();
    const $inputValue = $("#input-box").val();
    console.log($inputValue);
    const $listItem = $("<li>").addClass("to-do-item");
    $listItem.text($inputValue);
    const $listButton = $("<button>").text("COMPLETED");
    $listButton.attr("id", "list-button");
    // $listButton.appendTo($listItem);
    // console.log($listButton);

    $listItem.append($listButton);
    $($toDoUl).append($listItem);
    $(event.currentTarget).trigger("reset");
    // $listItem.text($inputValue);
  });

  // somehow targeting the "form" element disabled my "Add" button - clicking it wouldn't add the new list item to the list

  $("#submit").on("click", event => {
    //console.log("clicked");
    event.preventDefault();
    const $inputValue = $("#input-box").val();
    console.log($inputValue);

    const $listItem = $("<li>").addClass("to-do-item");
    $listItem.text($inputValue);

    const $listButton = $("<button>").text("COMPLETED");
    $listButton.attr("id", "list-button");
    // $listButton.appendTo($listItem);
    $listItem.append($listButton);
    $($toDoUl).append($listItem);

    $(event.currentTarget).trigger("reset");
  });

  const $doneUl = $("<ul>").appendTo("#completed");

  $("body").on("click", "#list-button", event => {
    console.log(event.currentTarget);
    console.log($(event.currentTarget));
    $(event.currentTarget)
      .parent()
      .appendTo($doneUl);
    $(event.currentTarget)
      .parent()
      .css("background-color", "#ED6495");
    const $doneListButton = $("#list-button").text("REMOVE");
    $("body").on("click", () => {
      $doneListButton.parent().remove();
    });
  });
});
