$(() => {
  //   console.log($('.card'))
  $('.card').on('click', (event) => {
    // console.log('clicked')
    console.log(event.currentTarget)
    // $('.card').toggleClass('card-back')
    $(event.currentTarget).toggleClass('card-back')
  })
})
