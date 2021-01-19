import React, { useState, useEffect } from "react";
import CountryCode from "../components/CountryCode";
import Header from "../components/Header";
import ContryCodeInput from "../components/ContryCodeInput";

function MobileConfirmation(props) {
  const [state, setState] = useState({
    currentCountryFlag: "https://restcountries.eu/data/tza.svg",
    currentCountryName: "Tanzania",
    currentCountryCode: "255",
  });
  const changeCountry = (item) => {
    setState({
      ...state,
      currentCountryFlag: item.flag,
      currentCountryName: item.name,
      currentCountryCode: item.callingCodes[0].toString(),
    });
  };

  return (
    <div className="MobileConfirmation">
      <div className="container">
        <Header />

        <div className="main-content">
          <h2>Please enter your phone number</h2>
          <CountryCode
            currentCountryFlag={state.currentCountryFlag}
            currentCountryName={state.currentCountryName}
            changeCountry={changeCountry}
          />
          <div className="contrycodeinput">
            <ContryCodeInput code={state.currentCountryCode} />
          </div>

          <button type="submit" className="btn-login btn-login-5 mt-5">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileConfirmation;
