import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./../../styles/shared/mobilenav.scss";
import Title from "./Title";

class MobileNav extends Component {
  state = { menuClosed: true };
  // A N I M A T E   H A M B U R G ER
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
  // D R O P   D O W N   N A V
  showMobileNav = () => {
    if (this.state.menuClosed === true) {
      return "none";
    } else {
      return "block";
    }
  };
  // IF MENU IS OPEN, GET RID OF TITLE

  removeHeaderOnClick = () => {
    if (this.state.menuClosed === false) {
      return "none";
    } else {
      return "block";
    }
  };

  render() {
    return (
      <>
        <Title
          className="header"
          style={{ display: `${this.removeHeaderOnClick()}` }}
        />
        {/* H A M B U R G E R */}

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
      </>
    );
  }
}

export default MobileNav;
