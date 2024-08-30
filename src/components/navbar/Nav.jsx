import React from "react";
import { ReactSVG } from "react-svg";
import Logotype from "/assets/svg/window-icon/drink-icon.svg";
import "./scss/styles.scss";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute z-3 p-4 m-3">
      <div className="container-fluid gap-3 d-flex">
        <a className="navbar-brand gap-3">
          <ReactSVG src={Logotype} />
          DrinkFilm
        </a>
      </div>
    </nav>
  );
};

export default Nav;
