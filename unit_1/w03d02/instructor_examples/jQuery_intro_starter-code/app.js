$(() => {
  // if (typeof $ == 'undefined') {
  //   console.log('oops! I still have to link my jQuery properly!');
  // } else {
  //   console.log('I did it! I linked jQuery and this js file properly!');
  // }

  const $div = $('<div>');

  console.log($div);

  console.log($('body'));

  $('body').append($div);

  $div.addClass('meat');

  const $h3 = $('<h3>').text('Ostrich');

  $div.append($h3);

  const $div2 = $('<div>');
  $('body').prepend($div2);
  $div2.addClass('vegetable');

  const $h3new = $('<h3>').text('Soylent Green');

  $div2.append($h3new);

  const $divs = $('div');

  $divs.hide(1500);
  $divs.show(1600);

  const $meats = $('.meat');
  console.log($meats);

  const $div3 = $('<div>');
  $('body').prepend($div3);
  $div3.addClass('dairy');

  const $h5 = $('<h3>');
  $h5.prepend(
    '<img src="https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">'
  );
  $div3.prepend($h5);

  console.log($divs.eq(2).children());

  $divs
    .eq(2)
    .children()
    .text('Kohlrabi');

  const $h4 = $('<h3>');
  $h4.text('wine');

  const $div5 = $divs.eq(2);
  $div5.empty();
  $div5.append($h4);

  $('body').css('border', '1em solid black');
});
