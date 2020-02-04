import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../styles/gallery.scss";
import bronte2 from "./../../images/bronte2.jpeg";
import em4 from "./../../images/em4.jpeg";
import cass3 from "./../../images/cass3.jpeg";
import tiger from "./../../images/tiger.jpeg";

class Gallery extends Component {
  render() {
    return (
      <>
        <section className="flex-container">
          {/* P O R T R A I T   B O X  */}
          <div className="top-div">
            <div className="genre-box">
              <Link
                to="/gallery/portrait"
                className="box-text"
                aria-label="portrait photos"
              >
                {/* Portrait */}
                <div
                  className="image1"
                  style={{
                    backgroundImage: `url(${bronte2})`
                  }}
                ></div>
              </Link>
            </div>
            {/* L A N D S C A P E   B O X  */}

            <div className="genre-box">
              <Link
                to="/gallery/landscape"
                className="box-text"
                aria-label="landscape photos"
              >
                {/* Landscape */}
                <div
                  className="image2"
                  style={{
                    backgroundImage: `url(${tiger})`
                  }}
                ></div>
              </Link>
            </div>
          </div>
          {/* B L A C K   A N D   W H I T E   B O X  */}

          <div className="bottom-div">
            <div className="genre-box">
              <Link
                to="/gallery/blackandwhite"
                className="box-text"
                aria-label="black and white photos"
              >
                {/* Black and White */}
                <div
                  className="image3"
                  style={{
                    backgroundImage: `url(${cass3})`
                  }}
                ></div>
              </Link>
            </div>

            {/* E D I T O R I A L   B O X  */}
            <div className="genre-box">
              <Link
                to="/gallery/editorial"
                className="box-text"
                aria-label="editorial photos"
              >
                {/* Editorial */}
                <div
                  className="image4"
                  style={{
                    backgroundImage: `url(${em4})`
                  }}
                >
                  {" "}
                </div>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Gallery;
