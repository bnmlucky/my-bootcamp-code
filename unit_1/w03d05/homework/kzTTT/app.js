console.log('Linked');

const generateGrid = (num) => {
  const $documentBody = $('body');
  const $gridContainer = $('<div>');
  $gridContainer.attr('id', 'grid-container');
  
  for (let i = 0; i < num; i += 1) {
    const $letterBox = $('<div>');
    $letterBox.attr('id', `letter-box${i+1}`);
    $letterBox.attr('class', 'letter-boxes');
    $gridContainer.append($letterBox);
  }
  
  $documentBody.prepend($gridContainer);
}

$(() => {
  generateGrid(9);
});
