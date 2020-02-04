import React, { Component } from "react";
import "./../../styles/shared/title.scss";

class Title extends Component {
  render() {
    return (
      <>
        {/* H E A D I N G */}

        <h1 className="header" style={this.props.style}>
          BRONTE DAVIS PHOTOGRAPHY
        </h1>
      </>
    );
  }
}

export default Title;
