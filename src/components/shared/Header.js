import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import twitter from "./../../images/twitter.png";
import instagram from "./../../images/instagram.png";

import "./../../styles/shared/header_and_navbar.scss";

class Header extends Component {
  render() {
    return (
      <>
        <h1 className="header">BRONTE DAVIS</h1>
        <div className="navbar">
          <div className="social-icons">
            <img src={twitter} alt="twitter" className="icon" />
            <img src={instagram} alt="instagram" className="icon" />
          </div>

          <div className="pages">
            <BrowserRouter>
              <button
                class="hamburger hamburger--slider is-active"
                type="button"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </BrowserRouter>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
