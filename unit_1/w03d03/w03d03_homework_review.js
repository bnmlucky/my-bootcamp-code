for (let land of lands) {
  const $article = $("<article>").attr("id", `${land}`);
  const $h1 = $("<h1>").text(`${land}`);
  $article.append($h1);
  $section.append($article);
}
