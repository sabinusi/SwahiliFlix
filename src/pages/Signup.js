import React from "react";
import logo1 from "../assets/Logo/SwahiliflixLogo.png";
import ArrowLeft from "../assets/Icons/ArrowLeft";
function Signup(props) {
  return (
    <div className="signup">
      <div className="container">
        <div className="top">
          <ArrowLeft width="30" fill="white" height="20" />
          <img src={logo1} width="200" height="60" alt="logo" />
          <a
            onClick={(e) => {
              e.preventDefault();
              props.history.push("/login");
            }}
          >
            Sign In
          </a>
        </div>
        <div className="content">
          <h2>Sign Up</h2>
          <div>
            <p>Create your account to start </p>
            <p>your membership </p>
          </div>
          <form className="form">
            <div className="input-container">
              <label>Email</label>
              <input placeholder="email" className="inpt" type="email" />
            </div>
            <div className="input-container">
              <label>Create Password</label>
              <input placeholder="password" className="inpt" type="password" />
            </div>

            <button type="submit" className="btn-login btn-login-5">
              {" "}
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
