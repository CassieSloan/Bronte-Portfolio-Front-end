import React, { Component } from "react";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Title from "./Title";

class Header extends Component {
  state = { screenSize: window.innerWidth };

  setScreenSize = () => {
    console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    this.setState({ screenSize: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.setScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  render() {
    if (this.state.screenSize < 550) {
      return (
        <>
          <Title />
          <MobileNav />
        </>
      );
    } else {
      return (
        <>
          <Title />
          <DesktopNav />
        </>
      );
    }
  }
}

export default Header;
