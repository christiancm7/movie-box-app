import React from "react";
import moviedbLogo from "../img/moviedb.png";

const PhoneFooter = () => {
  return (
    <footer className="phone-footer">
      <a
        href="https://www.themoviedb.org/"
        target="_blanck"
        className="footer__logo footer__logo--phone"
      >
        <img
          src={moviedbLogo}
          alt="Powered by the movie database"
          className="footer__logo-img"
        />
      </a>
      <div className="legal">
        &copy; 2018 by{" "}
        <a
          href="https://www.christianjmorales.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Christian Morales.
        </a>{" "}
        All rights reserved.
      </div>
    </footer>
  );
};

export default PhoneFooter;
