import React, { useState, useEffect } from "react";
import ChevrconDown from "../assets/Icons/ChevrconDown";
import Countries from "../assets/Helpers/Country.json";
import onClickOutside from "react-onclickoutside";
function CountryCode(props) {
  const [state, setState] = useState({
    open: false,
    countries: Countries,
  });
  const toggle = () => {
    setState({
      ...state,
      open: !state.open,
    });
  };

  const filterCountry = (name) => {
    setState({
      ...state,
      countries: Countries.filter((data) =>
        data.name
          .toString()
          .toLowerCase()
          .includes(name.toString().toLowerCase())
      ),
    });
  };
  CountryCode.handleClickOutside = () =>
    setState({
      ...state,
      open: false,
      countries: Countries,
    });

  return (
    <div className="CountryCode">
      <div
        role="button"
        className="search"
        onClick={() => toggle()}
        onKeyPress={() => toggle()}
      >
        <div className="_left">
          <img height="30" width="60" src={props.currentCountryFlag} />
          <p>{props.currentCountryName}</p>
        </div>
        <ChevrconDown height="20" width="30" fill="grey" />
      </div>
      <div className="content" style={{ height: "0px" }}>
        {state.open && (
          <div className="main">
            <input
              placeholder="search country"
              type="text"
              onChange={(e) => filterCountry(e.target.value)}
              className="inpt inpt-country"
            />
            <ul>
              {state.countries.map((item) => (
                <li
                  onClick={() => {
                    setState({
                      ...state,
                      open: false,
                    });
                    props.changeCountry(item);
                  }}
                >
                  <img src={item.flag} height="18" width="40" />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => CountryCode.handleClickOutside,
};

export default onClickOutside(CountryCode, clickOutsideConfig);
