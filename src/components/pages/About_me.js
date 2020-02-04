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
            <section className="icon-container">
              <img src={camera} alt="camera icon"></img>
              <img src={photoshop} alt="photoshop icon"></img>
              <img src={turtle} alt="turtle icon"></img>
              <img src={makeup} alt="makeup icon"></img>
            </section>
          </section>

          <div className="text-container">
            <p>
              Hi! I'm <span>Bronte Davis</span>
            </p>
            <p>
              Gummi bears apple pie gummies carrot cake soufflé chocolate cake
              gummi bears. Powder cookie gummi bears cupcake wafer chocolate bar
              oat cake. Jujubes brownie candy pudding jelly beans ice cream.
              Brownie bear claw sweet brownie sugar plum jelly beans lemon drops
              candy canes. Cupcake cotton candy candy canes fruitcake cheesecake
              jelly-o.
            </p>
            <p>
              Liquorice wafer icing cake gingerbread tiramisu. Brownie icing
              cake chupa chups sesame snaps candy canes sesame snaps liquorice
              caramels. Bonbon tiramisu jelly marshmallow macaroon icing
              cheesecake. Jelly fruitcake jelly-o powder pudding.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Aboutme;
