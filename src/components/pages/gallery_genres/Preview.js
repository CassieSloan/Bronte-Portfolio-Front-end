import React, { Component } from "react";
import "./../../../styles/preview.scss";

class Preview extends Component {
  render() {
    const { url, name, previewClose, caption } = this.props;
    return (
      <>
        <div className="flexbox" onClick={previewClose}>
          <div className="preview-container">
            <img className="image" src={url} alt={name}></img>
            <div className="text">
              <p className="caption">{caption}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Preview;
