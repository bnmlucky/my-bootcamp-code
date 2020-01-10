$(() => {
  $(() => {
    for (let i = 0; i < 1000; i++) {
      const $div = $('<div>')
      $div.addClass('square')
      $('body').append($div)
    }
  })
})
