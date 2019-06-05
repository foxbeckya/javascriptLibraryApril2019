
function acceptMovies(movieArray){

  const arraysOfWords = movieArray.map(movieTitle => movieTitle.split(''));
  const acceptedTitles = arraysOfWords.filter((title, i) => title.length >= 5);
  let rejoinedTitles = acceptedTitles.map(title => title.join(''));
  return rejoinedTitles;
  console.log (rejoinedTitles);
}

acceptMovies();