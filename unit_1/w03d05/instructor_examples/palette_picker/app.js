$(() => {
  const $colorPalette = $('#color-palette')
  const $generate = $('#generate')
  const $myPalette = $('#my-palette')

  const createSquare = () => {
    const $square = $('<div>')
    $square.addClass('square')
    const randomColor = createRandomColor()
    $square.css('background', randomColor)
    return $square
  }

  const addToMyPalette = (event) => {
    const squareColor = $(event.currentTarget).css('background-color')
    const $square = createSquare()
    $square.css('background', squareColor)
    $myPalette.append($square)
  }

  const makePalette = () => {
    $colorPalette.empty()
    for (let i = 0; i < 150; i++) {
      const $square = createSquare()
      $square.on('click', addToMyPalette)
      $colorPalette.append($square)
    }
  }

  const createRandomColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const color = 'rgb(' + red + ',' + green + ',' + blue + ')'
    return color
  }

  $generate.on('click', makePalette)
})
