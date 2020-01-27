import React, { Component } from "react";
import "./../../styles/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ash1 from "./../../images/ash1.jpeg";
import ash2 from "./../../images/ash2.jpeg";
import em1 from "./../../images/em1.jpeg";
import em2 from "./../../images/em2.jpeg";

class Home extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        {/* CAROUSEL IMAGES */}
        <div
          className="img-div1"
          style={{
            backgroundImage: `url(${ash1})`
          }}
        ></div>
        <div
          className="img-div2"
          style={{
            backgroundImage: `url(${ash2})`
          }}
        ></div>
        <div
          className="img-div3"
          style={{
            backgroundImage: `url(${em1})`
          }}
        ></div>
        <div
          className="img-div4"
          style={{
            backgroundImage: `url(${em2})`
          }}
        ></div>
      </Carousel>
    );
  }
}

export default Home;
