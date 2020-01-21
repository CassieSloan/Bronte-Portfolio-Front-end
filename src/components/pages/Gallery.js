import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./../../styles/gallery.scss";

class Gallery extends Component {
  render() {
    return (
      <>
        <section className="flex-container">
          <BrowserRouter>
            <div className="genre-box">
              <Link to="/gallery/portrait" className="box-text">
                Portrait
              </Link>
            </div>

            <div className="genre-box">
              <Link to="/gallery/landscape" className="box-text">
                Landscape
              </Link>
            </div>

            <div className="genre-box">
              <Link to="/gallery/black-and-white" className="box-text">
                Black and White
              </Link>
            </div>

            <div className="genre-box">
              <Link to="/gallery/Editorial" className="box-text">
                Editorial
              </Link>
            </div>
          </BrowserRouter>
        </section>
      </>
    );
  }
}

export default Gallery;
