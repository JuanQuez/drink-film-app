import React, { useState } from "react";
import Nav from "../navbar/Nav";
import "./scss/styles.scss";

const Hero = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    } else {
      onSearch("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="hero-container">
      <Nav />
      <div className="hero-info-bx">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Find out all about your favorite movies!</p>
        <div className="search-input-bx">
          <input
            type="text"
            className="form-input"
            placeholder="Find your movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
