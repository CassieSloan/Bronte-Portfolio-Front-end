import React, { Component } from "react";
import "./../../styles/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cass from "./../../images/cass.jpeg";
import ash2 from "./../../images/ash2.jpeg";
import em1 from "./../../images/em1.jpeg";
import bronte from "./../../images/bronte.jpeg";
import ash3 from "./../../images/ash3.jpeg";
import LoadingAnimation from "./../LoadingAnimation";

class Home extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    const { loading } = this.state;
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
      <>
        {loading && <LoadingAnimation />}
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
          renderButtonGroupOutside={true}
          renderDotsOutside={true}
        >
          {/* CAROUSEL IMAGES */}
          <div
            className="img-div1"
            style={{
              backgroundImage: `url(${cass})`
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
              backgroundImage: `url(${bronte})`
            }}
          ></div>
          <div
            className="img-div5"
            style={{
              backgroundImage: `url(${ash3})`
            }}
          ></div>
        </Carousel>
      </>
    );
  }
}

export default Home;
