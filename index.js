const apiKey = '447cc9aa3173a3cdbf40df1b9f1ba310';
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

const movieTiles = document.getElementById('movie-tiles');

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(movie => {
      const movieTile = document.createElement('div');
      movieTile.classList.add('movie-tile');

      const moviePoster = document.createElement('img');
      moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      moviePoster.alt = movie.title;
      movieTile.appendChild(moviePoster);

      const movieTitle = document.createElement('h2');
      movieTitle.textContent = movie.title;
      movieTile.appendChild(movieTitle);

      const movieYear = document.createElement('p');
      movieYear.textContent = `Released: ${movie.release_date.slice(0, 4)}`;
      movieTile.appendChild(movieYear);

      const movieDescription = document.createElement('p');
      movieDescription.textContent = movie.overview;
      movieTile.appendChild(movieDescription);

      const movieGenres = document.createElement('p');
      movieGenres.textContent = `Genres: ${movie.genre_ids.join(', ')}`;
      movieTile.appendChild(movieGenres);

      movieTiles.appendChild(movieTile);
    });
  })
  .catch(error => console.error(error));
