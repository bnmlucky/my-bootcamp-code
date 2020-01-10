$(() => {
  const $targetBody = $("body");

const callbackFn () => {
    $targetBody.toggleClass('black');
      
}

  const $targetBtn = $("#btn");
  console.log($targetBtn);
  $targetBtn.on("click", callbackFn);
});
