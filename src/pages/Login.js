import React from "react";
import logo1 from "../assets/Logo/SwahiliflixLogo.png";
import Bimage from "../assets/Images/image--000.jpg";
function Login(props) {
  return (
    <div className="login" style={{ backgroundImage: `url(${Bimage})` }}>
      <div className="container">
        <img src={logo1} width="200" height="60" alt="logo" />
        <div className="_page">
          <h3>Sign In</h3>
          <form className="form">
            <div className="input-container">
              <label>Email</label>
              <input placeholder="email" className="inpt" type="email" />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input placeholder="password" className="inpt" type="password" />
            </div>

            <button type="submit" className="btn-login">
              {" "}
              Sign In
            </button>
          </form>
          <div className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <div className="signup">
            <p>Already have an account ? </p>
            <a
              onClick={(e) => {
                e.preventDefault();
                props.history.push("/signup");
              }}
            >
              {" "}
              SignUp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
