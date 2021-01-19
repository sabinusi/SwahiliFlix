import React from "react";
import logo1 from "../assets/Logo/SwahiliflixLogo.png";
import Bimage from "../assets/Images/image--000.jpg";
import { useTranslation } from "react-i18next";

function Language(props) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    //to display in render  {t("home.1")}
  };

  return (
    <div className="language" style={{ backgroundImage: `url(${Bimage})` }}>
      <div className="main">
        <img src={logo1} width="200" height="60" alt="logo" />
        <div className="btn-container">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // changeLanguage("en");
              props.history.push("/login");
            }}
            className="btn btn-english"
          >
            English
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeLanguage("sw");
            }}
            className="btn btn-swahili"
          >
            Swahili
          </a>
        </div>
      </div>
    </div>
  );
}

export default Language;
