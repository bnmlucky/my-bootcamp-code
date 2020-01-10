console.log('JS is linked');

$(() => {
  const $targetBody = $('body');

  const $targetBtn = $('#btn');
  console.log($targetBtn);

  const callbackFn = () => {
    
    // console.log('Button is cLicked');
    // $targetBody.append("It seems as if it's been clicked");
    
    $targetBody.toggleClass('black');

  }

  $targetBtn.on('click', callbackFn);

});