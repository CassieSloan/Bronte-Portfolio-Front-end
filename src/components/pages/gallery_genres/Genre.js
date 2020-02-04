import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //method to ascertain route endpoint
import "./../../../styles/genre.scss"; //style sheet
import axios from "axios"; //use backend api
// import { setServers } from "dns";

class Genre extends Component {
  state = {
    images: [],
    pathname: ""
  };

  componentDidMount() {
    this.retrieveImages();
  }

  componentDidUpdate() {
    this.retrieveImages();
  }

  async retrieveImages() {
    if (
      this.props.location.pathname !== "/gallery" &&
      this.props.location.pathname !== this.state.pathname
    ) {
      try {
        const filteredImages = []; //new array to push into state when populated

        const response = await axios.get("http://localhost:3001/images"); //get images from backend api
        let images = response.data;
        //look through images
        for (let image of images) {
          let imageCategories = image.category;
          //find images categories
          for (let category of imageCategories) {
            let path = this.props.location.pathname; //finds current path
            if (path === `/gallery/${category}`) {
              //if current path matches a category, push image to array
              filteredImages.push(image);
            }
          }
        }

        this.setState((state, props) => {
          return {
            images: filteredImages, //set array of images as state
            pathname: props.location.pathname
          };
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  //state = {clicked: false}

  //imagePreview = () => {
  // this.setState = (state) => {
  //state = {!clicked}
  //if state.clicked === true
  //return <Preview/>
  // }
  // }

  render() {
    const { images } = this.state;

    return (
      <>
        <div className="divider"></div>
        <div className="flexbox">
          {/* iterate through images  */}
          {images.reverse().map(image => {
            return (
              <>
                <div className="image-container" key={image.url}>
                  <img src={image.url} alt={image.name} />
                  {/* onClick, render preview component  */}
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
