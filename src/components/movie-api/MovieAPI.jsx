import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieDetail from "../movie-modal-details/MovieDetail";
import Hero from "../hero-section/Hero";
import "./scss/styles.scss";
import ListMovie from "../trending-section/ListMovie";
import LoadingSpinner from "../loader-modal/LoadingSpinner";
import { ReactSVG } from "react-svg";
import ErrorIcon from "/assets/svg/error-icon/X-Circle-Fill--Streamline-Bootstrap.svg";

const MovieAPI = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // Estado para la película seleccionada
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(""); // Estado de error

  useEffect(() => {
    // Cargar algunas películas populares de mueswtra al inicio
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b863304e81b1eaa02dfc38cb4acb8e63"
      )
      .then((res) => setTrendingMovies(res.data.results));
  }, []);

  // Función para manejar la búsqueda de películas
  const handleSearch = (query) => {
    if (!query.trim()) {
      console.log("Empty query detected");
      setError("Please enter a valid movie title.");
      setTrendingMovies([]); // Limpiar las películas si hay un error de entrada
      setSelectedMovie(null); // Resetear la película seleccionada
      return;
    }

    setLoading(true);
    setError(""); // Limpiar el error antes de la búsqueda

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b863304e81b1eaa02dfc38cb4acb8e63&query=${query}`
      )
      .then((res) => {
        if (res.data.results.length === 0) {
          setError("No results found for your search. Movie not found");
          setTrendingMovies([]); // Limpiar las películas si no hay resultados
        } else {
          setTrendingMovies(res.data.results);
          setSelectedMovie(null); // Resetear la película seleccionada
        }
        setLoading(false); // Termina el spinenr
      })
      .catch((error) => {
        console.error("API Error:", error);
        setError(
          "Search results could not be obtained due to a problem with the database. Please try again later."
        );
        setLoading(false); // Termina la carga
      });
  };

  // Función para manejar la selección de una película
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && !loading && (
        <div className="error-message">
          <h3>{error}</h3>
          <ReactSVG src={ErrorIcon} />
        </div>
      )}
      {!loading && !error && selectedMovie ? (
        <MovieDetail movie={selectedMovie} />
      ) : (
        !loading &&
        !error && (
          <ListMovie
            trendingMovies={trendingMovies}
            onSelectMovie={handleSelectMovie}
          />
        )
      )}
    </>
  );
};

export default MovieAPI;
