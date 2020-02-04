import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //method to ascertain route endpoint
import "./../../../styles/genre.scss"; //style sheet
import axios from "axios"; //use backend api
import { setServers } from "dns";

class Genre extends Component {
  state = {
    images: []
  };

  //get pictures from back end and set state
  async componentDidMount() {
    try {
      const filteredImages = [];

      const response = await axios.get("http://localhost:3001/images");
      let images = response.data;
      console.log(images);
      for (let image of images) {
        let imageCategories = image.category;
        for (let category of imageCategories) {
          let path = this.props.location.pathname; //finds current path
          if (path === `/gallery/${category}`) {
            filteredImages.push(image);
          }
        }
      }

      this.setState({ images: filteredImages });
    } catch (error) {
      console.log(error);
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
