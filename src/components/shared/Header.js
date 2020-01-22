import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import twitter from "./../../images/twitter.png";
import instagram from "./../../images/instagram.png";

import "./../../styles/shared/header_and_navbar.scss";

class Header extends Component {
  state = { menuClosed: true };

  onHamburgerClick = () => {
    this.setState(state => {
      return { menuClosed: !state.menuClosed };
    });
  };

  getHamClassName = () => {
    if (this.state.menuClosed === false) {
      return "is-active";
    }
  };
  showMobileNav = () => {
    function setScreenSize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }

    window.addEventListener("resize", setScreenSize);
    if (this.state.menuClosed === true && window.innerWidth < 550) {
      return "none";
    } else {
      return "block";
    }
  };
  render() {
    return (
      <>
        <h1 className="header">BRONTE DAVIS</h1>
        <div className="navbar">
          <div className="social-icons">
            <img src={twitter} alt="twitter" className="icon" />
            <img src={instagram} alt="instagram" className="icon" />
          </div>

          <button
            className={`hamburger hamburger--slider ${this.getHamClassName()}`}
            onClick={this.onHamburgerClick}
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>

          <div className="pages" style={{ display: `${this.showMobileNav()}` }}>
            <BrowserRouter>
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
