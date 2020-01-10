$(() => {
  const handleMovie = (movie) => {
    // code goes here after request is finished successfully

    const $title = $('<h1>')
    $title.text(movie.Title)
    $('.container').append($title)

    const $director = $('<h2>')
    $director.text(`Directed by the one and only ${movie.Director}`)
    $('.container').append($director)
  }

  $('form').on('submit', (event) => {
    event.preventDefault()

    const titleInput = $('.title-query')
    const titleQuery = titleInput.val()
    const endpoint = `http://www.omdbapi.com/?apikey=ae2e7a36&t=${titleQuery}`

    $.ajax({ url: endpoint }).then(handleMovie)
  })
})
