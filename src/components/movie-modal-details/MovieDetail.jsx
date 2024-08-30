import React from "react";
import "./scss/styles.scss";

const MovieDetail = ({ movie }) => {
  if (!movie) return null;

  return (
    <section className="movie-details-container">
      <div className="movie-detail-bx">
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.overview}</p>
        <p><span>Release Date:</span> {movie.release_date}</p>
        <p><span>Rating:</span> {movie.vote_average}</p>
      </div>
      
    </section>
  );
};

export default MovieDetail;
