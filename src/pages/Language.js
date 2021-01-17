import React from "react";
import logo from "../assets/Logo/SwahiliflixIcon.png";

function Language(props) {
  return (
    <div className="language">
      <div className="main">
        <img src={logo} />
        <div className="btn-container">
          <a>English</a>
          <a>Swahili</a>
        </div>
      </div>
    </div>
  );
}

export default Language;
