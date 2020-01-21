import React, { Component } from "react";
import "./../../../styles/portrait.scss";
import ash1 from "../../../images/ash1.jpeg";
import ash2 from "../../../images/ash2.jpeg";
import ash3 from "../../../images/ash3.jpeg";
import ash4 from "../../../images/ash4.jpeg";
import ash5 from "../../../images/ash5.jpeg";
import ash6 from "../../../images/ash6.jpeg";
import em1 from "../../../images/em1.jpeg";
import em2 from "../../../images/em2.jpeg";
import em3 from "../../../images/em3.jpeg";

//import styles

class Portrait extends Component {
  state = {
    //hardcoding for testing purposes
    images: [ash1, ash2, ash3, ash4, ash5, ash6, em1, em2, em3]
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <div className="flexbox">
          {images.map(image => {
            return (
              <>
                <div className="image-container">
                  <img
                    key={images}
                    src={image}
                    alt="portrait"
                    className="image"
                  />
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Portrait;
