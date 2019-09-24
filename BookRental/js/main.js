$.getJSON('data/HarryPotter_BookRental.json', function(result) {

  console.log(result);

  document.getElementById('title').innerHTML = result.title;
  document.getElementById('author').innerHTML += result.author;
  document.getElementById('description').innerHTML += result.description;
  document.getElementById('tags').innerHTML += result.tags;
  document.getElementById('format').innerHTML += result.format;
  document.getElementById('genre').innerHTML += result.genre;
  document.getElementById('dimensions').innerHTML += result.dimensions;
  document.getElementById('datePublished').innerHTML += result.datePublished;
  document.getElementById('publisher').innerHTML += result.publisher;
  document.getElementById('language').innerHTML += result.language;
  document.getElementById('isbn').innerHTML += result.isbn;
  document.getElementById('VolumeNumber').innerHTML += result.VolumeNumber;
  document.getElementById('ages').innerHTML += result.ages;
  document.getElementById('popularity').innerHTML += result.popularity;
  document.getElementById('lateFee').innerHTML += result.lateFee;


  result.reviews.forEach( function(reviews) {


    document.getElementById('reviews').innerHTML += '<li>' +
      review.user+
      review.comment +
      '</li>';



  });



});
