$(() => {
  //#input-box
  //#submit
  //input-container
  const $body = $("body");
  const $toDoList = $("#to-do-list");
  const $completed = $("#completed");
  const $lists = $("#lists");

  $("#submit").on("click", () => {
    // event.preventDefault();
    //   //grab to-do from input box
    const $inputBox = $("#input-box");
    const $inputValue = $inputBox.val();
    //   //create word on Screen
    const $h3 = $("<h3>").text($inputValue);
    //   //create a div
    const $div = $("<div>");
    //append div to to-do
    $toDoList.append($div);
    //create button
    const $completeButton = $("<button>").text("COMPLETED");
    $completeButton.attr("id", "checkingComplete");
    //append item
    $div.append($h3);
    $h3.append($completeButton);
  });
  $("#to-do-list").on("click", "button", event => {
    $(event.currentTarget).text("REMOVE");
    $("#completed").append($(event.currentTarget).parent());
  });

  $completed.on("click", "button", event => {
    $(event.currentTarget)
      .parent()
      .remove();
  });
});