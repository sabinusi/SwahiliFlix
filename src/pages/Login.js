import React from "react";
import { useTranslation } from "react-i18next";
function Login(props) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      login {t("home.1")}{" "}
      <button onClick={() => changeLanguage("en")}>english</button> <br />
      <button onClick={() => changeLanguage("sw")}>swahili</button> <br />
      <br />
    </div>
  );
}

export default Login;
