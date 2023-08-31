import "./styles.css";
import React from "react";

export default function App() {
  const [sideOpen, setSideOpen] = React.useState(false);
  const movieList = [];
  for (var i = 0; i < 15; i++) {
    movieList.push(i);
  }
  function HandleSideOpen(event) {
    console.log("clicked");
    const wrapper = document.getElementById("wrapper");
    if (!sideOpen) {
      wrapper.style.setProperty("grid-template-columns", "1fr 3fr");
    } else {
      wrapper.style.setProperty("grid-template-columns", "0fr 1fr");
    }
    setSideOpen(!sideOpen);
  }
  return (
    <div className="app">
      <nav className="navbar">
        <div className="sidemenu-button">
          <p onClick={HandleSideOpen}>Side</p>
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <div className="wrapper" id="wrapper">
        <div className="sidemenu">
          <h3>Categories</h3>
          <ul>
            <li>Horror</li>
            <li>Romance</li>
            <li>Comedy</li>
          </ul>
        </div>
        <div className="main">
          <h3>Movies for you</h3>
          <div className="movie-grid">
            {movieList.map((ele, idx) => {
              return <div className={`movie-pic-${idx} , movie-pic`}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
