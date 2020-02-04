import React, { Component } from "react";

class Preview extends Component {
  render() {
    return (
      <>
        <section className="background">
          <div className="image-container">
            {/* <img src={this.image.url} /> */}
          </div>
          <p className="caption">{this.image.caption}</p>
        </section>
      </>
    );
  }
}

export default Preview;
