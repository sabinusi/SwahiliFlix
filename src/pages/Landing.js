import React from "react";

import Acordition from "../components/accordition";

import logo from "../assets/Logo/SwahiliflixIcon.png";
import logo1 from "../assets/Logo/SwahiliflixLogo.png";
import LatestMovies from "../assets/Images/Assets-04.png";
import TvShows from "../assets/Images/Assets-05.png";
import Movies from "../assets/Images/Assets-06.png";
import RealtyShows from "../assets/Images/Assets-08.png";
import Dramas from "../assets/Images/Assets-07.png";
import Comedy from "../assets/Images/Assets-09.png";
import Everywhere from "../assets/Images/every2.png";
import Tv from "../assets/Images/tv.png";
import Download from "../assets/Images/download.png";

function Landing(props) {
  return (
    <div className="landing">
      {/* heading */}
      <div className="header">
        <div className="main">
          <img src={logo1} width="250" height="90" alt="logo" />
          <div className="text">
            <h1>Watch & discover new stories.</h1>
            <p>
              Form your favorite Swahili drama to the most exciting actions.
            </p>
            <p>Starting at 1,000 TZS / day.</p>
          </div>
          <a
            href="#"
            className="btn btn-watch"
            onClick={(e) => {
              e.preventDefault();
              props.history.push("/language");
            }}
          >
            Start Watching
          </a>
        </div>
      </div>
      {/* heading */}
      {/* genre */}
      <div className="genre">
        <div className="container">
          <div className="main">
            <div
              className="_latest-movies"
              style={{ backgroundImage: `url(${LatestMovies})` }}
            >
              <h4>latest movies</h4>
            </div>
            <div className="_section-2">
              <div
                className="_top"
                style={{ backgroundImage: `url(${TvShows})` }}
              >
                <h4>Tv Shows</h4>
              </div>
              <div
                className="_bottom"
                style={{ backgroundImage: `url(${Movies})` }}
              >
                <h4>Movies</h4>
              </div>
            </div>
            <div className="_section-3">
              <div
                className="_top"
                style={{ backgroundImage: `url(${RealtyShows})` }}
              >
                <h4>Reality Shows</h4>
              </div>
              <div
                className="_bottom"
                style={{ backgroundImage: `url(${Dramas})` }}
              >
                <h4>Dramas</h4>
              </div>
            </div>
            <div
              className="_section-4"
              style={{ backgroundImage: `url(${Comedy})` }}
            >
              <h4>Comedy</h4>
            </div>
          </div>
          <div className="watch-everywhere">
            <div className="_text">
              <h2>Watch everywhere.</h2>
              <p>Stream unlimited movies and TV shows on your</p>
              <p>phone, tablet, laptop, and TV without paying more.</p>
            </div>
            <img src={Everywhere} height="227" width="400" />
          </div>
        </div>
      </div>
      {/* genre */}

      {/* tv */}
      <div className="tv">
        <div className="container">
          <div className="_text">
            <h2>Enjoy on your TV.</h2>
            <p>Stream unlimited movies and TV shows on your</p>
            <p>phone, tablet, laptop, and TV without paying more.</p>
          </div>
          <img src={Tv} height="220" />
        </div>
      </div>
      {/* tv */}

      {/* online */}
      <div className="online">
        <div className="container">
          <div className="_text">
            <h2>Download, watch offline.</h2>
            <p>Stream unlimited movies and TV shows on your</p>
            <p>phone, tablet, laptop, and TV without paying more.</p>
          </div>
          <img src={Download} height="220" width="439" />
        </div>
      </div>
      {/* online */}
      <div className="questions">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <Acordition
            title="What is Swahiliflix?"
            width="100%"
            content="<div>
              <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
              <br/>
              <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
            </div>"
          />
          <Acordition
            title="How does subscrition work?"
            width="100%"
            content="<div><p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$7.99 to US$11.99 a month. No extra costs, no contracts.
            </p></div>"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
