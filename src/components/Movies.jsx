import React from "react";

function ListOfMovies({ movies }) {
  return (
    <>
      <ul className="movies">
        {movies.map((movie) => (
          <li key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.Title} />
          </li>
        ))}
      </ul>
    </>
  );
}

function NotMoviesResult() {
  return (
    <>
      <p>No hay peliculas disponibles (busca la pelicula que mas te guste :3)</p>
    </>
  );
}

export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NotMoviesResult />;
}
