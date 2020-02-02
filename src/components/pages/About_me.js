import React, { Component } from "react";
import "./../../styles/aboutme.scss";

class Aboutme extends Component {
  render() {
    return (
      <>
        <div className="flex-box">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0CqI8Xtux5jFCZApNESuolAhqV1Ba_OkXlAbZxlH1OvUBvHg9"></img>
          </div>

          <div className="text-container">
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
