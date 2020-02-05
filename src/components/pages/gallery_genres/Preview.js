import React, { Component } from "react";

class Preview extends Component {
  render() {
    return (
      <>
        <div className="preview-container">
          <img src={this.props.image.url} alt={this.props.image.name}></img>
        </div>
      </>
    );
  }
}

export default Preview;
