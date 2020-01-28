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
            <div className="genre-box">
              <div
                className="image1"
                style={{
                  backgroundImage: `url(${ash4})`
                }}
              >
                <Link to="/gallery/portrait" className="box-text">
                  Portrait
                </Link>
              </div>
            </div>

            <div className="genre-box">
              <div
                className="image2"
                style={{
                  backgroundImage: `url(${em3})`
                }}
              >
                <Link to="/gallery/landscape" className="box-text">
                  Landscape
                </Link>
              </div>
            </div>

            <div className="genre-box">
              <div
                className="image3"
                style={{
                  backgroundImage: `url(${ash5})`
                }}
              >
                <Link to="/gallery/black-and-white" className="box-text">
                  Black and White
                </Link>
              </div>
            </div>

            <div className="genre-box">
              <div
                className="image4"
                style={{
                  backgroundImage: `url(${ash6})`
                }}
              >
                <Link to="/gallery/editorial" className="box-text">
                  Editorial
                </Link>
              </div>
            </div>
          </BrowserRouter>
        </section>
      </>
    );
  }
}

export default Gallery;
