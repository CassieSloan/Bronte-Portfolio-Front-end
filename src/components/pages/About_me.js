import React, { Component } from "react";
import "./../../styles/aboutme.scss";
import camera from "./../../images/icons/icons8-camera-50.png";
import photoshop from "./../../images/icons/icons8-adobe-photoshop-50.png";
import turtle from "./../../images/icons/icons8-turtle-50-3.png";
import makeup from "./../../images/icons/icons8-face-powder-50.png";
import bronte from "./../../images/bronte.jpeg";

class Aboutme extends Component {
  render() {
    return (
      <>
        <div className="flex-box">
          <section className="images-block">
            <div className="image-container">
              <img src={bronte} alt="portrait of Bronte"></img>
            </div>
          </section>

          <div className="text-container">
            <p>
              <span>Bronte Davis</span>is a portrait photographer based in
              Sydney, Australia.
            </p>
            <p>
              When she's not wrangling children at work or animals at home,
              snapping photos is her favourite creative outlet.
            </p>
            <p>(That, and occasionally drawing eyebrows on the dog.)</p>
            <section className="icon-container">
              <img src={camera} alt="camera icon"></img>
              <img src={photoshop} alt="photoshop icon"></img>
              <img src={turtle} alt="turtle icon"></img>
              <img src={makeup} alt="makeup icon"></img>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Aboutme;
