import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //method to ascertain route endpoint
import "./../../../styles/genre.scss"; //style sheet
//test images
import ash1 from "../../../images/ash1.jpeg";
import ash2 from "../../../images/ash2.jpeg";
import ash3 from "../../../images/ash3.jpeg";
import ash4 from "../../../images/ash4.jpeg";
import ash5 from "../../../images/ash5.jpeg";
import ash6 from "../../../images/ash6.jpeg";
import em1 from "../../../images/em1.jpeg";
import em2 from "../../../images/em2.jpeg";
import em3 from "../../../images/em3.jpeg";

//have state change depending on end point/category e.g portrait
//have state equal an array with corresponding image urls/amazon images
//map through state to display images
//e.g
//if endpoint = /portrait
// fill state with images categorised/tagged as portrait

class Genre extends Component {
  state = {
    //hardcoding for testing purposes
    images: [ash1, ash2, ash3, ash4, ash5, ash6, em1, em2, em3]
  };

  render() {
    const { images } = this.state;
    console.log(this.props.location.pathname); //finds current path

    return (
      <>
        <div className="flexbox">
          {images.map(image => {
            return (
              <>
                <div className="image-container">
                  <img key={images} src={image} alt="portrait" />
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default withRouter(Genre);
