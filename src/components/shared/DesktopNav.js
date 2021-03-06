import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../styles/shared/desktopnav.scss";
import twitter from "./../../images/twitter.png";
import instagram from "./../../images/instagram.png";

class DesktopNav extends Component {
  render() {
    return (
      <>
        {/*  N A V B A R   C O N T A I N E R */}

        <div className="navbar">
          <div className="social-icons">
            {/* TWITTER */}
            <a
              href="https://twitter.com/BronteRhian_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" className="icon" />
            </a>
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/redshirtwalking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" className="icon" />
            </a>
          </div>
          {/* PAGE LINKS */}
          <div className="link-container">
            <Link to="/" className="nav-link" name="home">
              Home
            </Link>
            <Link to="/gallery" className="nav-link" name="gallery">
              Gallery
            </Link>
            <Link to="/about" className="nav-link" name="about me">
              About
            </Link>
            <Link to="/contact" className="nav-link" name="contact">
              Contact
            </Link>
            <Link to="/blog" className="nav-link" name="blog">
              Blog
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default DesktopNav;
