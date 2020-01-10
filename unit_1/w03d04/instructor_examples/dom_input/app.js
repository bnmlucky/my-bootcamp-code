$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()
    const $inputBox = $('#input-box')
    const inputValue = $inputBox.val()

    const listItem = $('<li>')
    listItem.text(inputValue)
    $('ul').append(listItem)

    $(event.currentTarget).trigger('reset')
  })

  //   $('li').on('click', () => {
  //     console.log('clicked')
  //   })

  $('body').on('click', 'li', (event) => {
    console.log(event.currentTarget)
    $(event.currentTarget).css('text-decoration', 'line-through')
  })
})
