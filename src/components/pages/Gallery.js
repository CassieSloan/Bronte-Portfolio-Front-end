import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./../../styles/gallery.scss";
import ash4 from "./../../images/ash4.jpeg";
import em3 from "./../../images/em3.jpeg";
import ash5 from "./../../images/ash5.jpeg";
import ash6 from "./../../images/ash6.jpeg";
import axios from "axios";

class Gallery extends Component {
  state = {
    images: []
  };

  async componentDidMount() {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/images`
    );
    let images = response.data;
    console.log(images);

    this.setState({ images });
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <section className="flex-container">
          {images.reverse().map(image => {
            return (
              <>
                <div className="image-container">
                  <img
                    key={images}
                    src={image.imageUrl}
                    alt={image.imageName}
                  />
                </div>
                {/* click for full page view with post.body */}
              </>
            );
          })}
          {/* P O R T R A I T   B O X  */}
          <div className="top-div">
            <div className="genre-box">
              <Link to="/gallery/portrait" className="box-text">
                {/* Portrait */}
                <div
                  className="image1"
                  style={{
                    backgroundImage: `url(${ash4})`
                  }}
                ></div>
              </Link>
            </div>
            {/* L A N D S C A P E   B O X  */}
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
          </div>
          {/* B L A C K   A N D   W H I T E   B O X  */}

          <div className="bottom-div">
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
            {/* E D I T O R I A L   B O X  */}
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
          </div>
        </section>
      </>
    );
  }
}

export default Gallery;
