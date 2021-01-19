import React from "react";
import logo1 from "../assets/Logo/SwahiliflixLogo.png";
import ArrowLeft from "../assets/Icons/ArrowLeft";

function Header(props) {
  return (
    <div className="header">
      <ArrowLeft width="30" fill="white" height="20" />
      <img src={logo1} width="200" height="60" alt="logo" />
      <p></p>
    </div>
  );
}

export default Header;
