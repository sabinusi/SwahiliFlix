import React from "react";
import { useTranslation } from "react-i18next";
function Otp(props) {
  const { t, i18n } = useTranslation();
  return <div>otp {t("home.1")} </div>;
}

export default Otp;
