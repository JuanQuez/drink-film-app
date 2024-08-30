import React from "react";
import "./scss/styles.scss";
// IMPORT CDN SWIPER LIBRARY: https://swiperjs.com/
import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";

const ListMovie = ({ trendingMovies, onSelectMovie}) => {
  return (
    <section className="movie-container">
      <swiper-container
        className="mySwiper"
        slides-per-view="3"
        space-between="50"
        speed="3000"
        loop="true"
        autoplay-delay="4000"
        breakpoints={JSON.stringify({
          1: {
            slidesPerView: 1,
          },

          1200: {
            slidesPerView: 2,
          },

          1700: {
            slidesPerView: 3,
          },

          2000: {
            slidesPerView: 4,
          },

          3000: {
            slidesPerView: 5,
          },
        })}
      >
        {trendingMovies.map((movies, index) => (
          <swiper-slide key={index} onClick={() => onSelectMovie(movies)}>
            <div className="card-bx">
              <div className="movie-info-bx">
                <h3>{movies.title}</h3>
                <h4>{movies.release_date}</h4>
              <div className="picture-box">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movies?.poster_path}`}
                  alt={movies.original_title}
                />
              </div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};

export default ListMovie;
