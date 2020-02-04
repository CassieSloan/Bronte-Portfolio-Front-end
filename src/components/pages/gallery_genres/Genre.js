import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //method to ascertain route endpoint
import "./../../../styles/genre.scss"; //style sheet
import axios from "axios";

class Genre extends Component {
  state = {
    images: []
  };

  //   setImageState = () => {
  //    let path = this.props.location.pathname
  //    console.log(this.props.location.pathname); //finds current path

  //    if (path === `/gallery/${image.category}`)
  // }
  //function setImageState = () => {
  // let path = this.props.location.pathname
  //if (path === `/gallery${image.category}`(e.g "portrait")) {
  //setState = {images: [array of portrait tagged images]}
  //}
  // }

  async componentDidMount() {
    try {
      const response = await axios.get(
        // `${process.env.REACT_APP_SERVER_URL}/images`
        "http://localhost:3001/images"
      );
      let images = response.data;
      console.log(images);

      this.setState({ images });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const { images } = this.state;

    return (
      <>
        <div className="flexbox">
          {images.reverse().map(image => {
            return (
              <>
                <div className="image-container" key={image.url}>
                  <img src={image.url} alt={image.name} />
                </div>
                {/* click for full page view with post.body */}
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default withRouter(Genre);
