$(() => {
<<<<<<< HEAD
  const titleQuery = "eraserhead";
  const endpoint = `http://www.omdbapi.com/?apikey=58f42792&t=eraserhead`;

  const handleMovie = movie => {
    //code goes here after request is finished
    console.log(movie);
    const title = $("<h1>")
      .text(movie.Title)
      .appendTo(".container");
    console.log(title);
    const $director = $("<h2>").text(
      `Directed by the one and only ${movie.Director}`
    ); // create the h2 and put the director inside
    $(".container").append($director); // add the director to the container
    const rating = $("<h3>").text(movie.Rated);
    $(".container").append(rating);
    console.log(rating);
  };

  $("form").on("submit", event => {
    event.preventDefault();
    const titleQuery = $(".title-query").val();
    console.log(titleQuery);
    const endpoint = `http://www.omdbapi.com/?apikey=58f42792&t=${titleQuery}`;
    console.log(endpoint);
    $.ajax({ url: endpoint }).then(handleMovie);
  });
});
=======
  const titleQuery = 'eraserhead'
  const endpoint = `http://www.omdbapi.com/?apikey=YOUR_API_KEY_HERE&t=${titleQuery}`

  console.log(endpoint)
})
>>>>>>> cba00fed0f911f8dec365aea8166de7d3579f8f1
