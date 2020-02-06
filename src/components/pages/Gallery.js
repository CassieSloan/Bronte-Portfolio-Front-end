import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../styles/gallery.scss";
import bronte2 from "./../../images/bronte2.jpeg";
import em4 from "./../../images/em4.jpeg";
import cass3 from "./../../images/cass3.jpeg";
import tiger from "./../../images/tiger.jpeg";
import LoadingAnimation from "../LoadingAnimation";

class Gallery extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading && <LoadingAnimation />}
        <section className="flex-container">
          {/* P O R T R A I T   B O X  */}
          <div className="top-div">
            <div className="genre-box">
              <div className="box-text">
                <p>Portrait</p>
              </div>

              <Link to="/gallery/portrait" aria-label="portrait photos">
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
              <div className="box-text">
                <p>Nature</p>
              </div>

              <Link to="/gallery/landscape" aria-label="landscape photos">
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
              <div className="box-text">
                <p>Black and</p> <p>white</p>
              </div>

              <Link
                to="/gallery/blackandwhite"
                aria-label="black and white photos"
              >
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
              <div className="box-text">
                <p>Editorial</p>
              </div>

              <Link to="/gallery/editorial" aria-label="editorial photos">
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
