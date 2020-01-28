import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./../../styles/gallery.scss";
import ash4 from "./../../images/ash4.jpeg";
import em3 from "./../../images/em3.jpeg";
import ash5 from "./../../images/ash5.jpeg";
import ash6 from "./../../images/ash6.jpeg";

class Gallery extends Component {
  render() {
    return (
      <>
        <section className="flex-container">
          <BrowserRouter>
            {/* PORTRAIT BOX */}
            <div className="genre-box">
              <Link to="/gallery/portrait" className="nav-link">
                {/* Portrait */}
                <div
                  className="image1"
                  style={{
                    backgroundImage: `url(${ash4})`
                  }}
                ></div>
              </Link>
            </div>
            {/* LANDSCAPE BOX */}
            <div className="genre-box">
              <Link to="/gallery/landscape" className="box-text">
                {/* Landscape */}
                <div
                  className="image2"
                  style={{
                    backgroundImage: `url(${em3})`
                  }}
                ></div>
              </Link>
            </div>
            {/* BLACK AND WHITE BOX */}
            <div className="genre-box">
              <Link to="/gallery/black-and-white" className="box-text">
                {/* Black and White */}

                <div
                  className="image3"
                  style={{
                    backgroundImage: `url(${ash5})`
                  }}
                ></div>
              </Link>
            </div>
            {/* EDITORIAL BOX */}
            <div className="genre-box">
              <Link to="/gallery/editorial" className="box-text">
                {/* Editorial */}
                <div
                  className="image4"
                  style={{
                    backgroundImage: `url(${ash6})`
                  }}
                >
                  {" "}
                </div>
              </Link>
            </div>
          </BrowserRouter>
        </section>
      </>
    );
  }
}

export default Gallery;
