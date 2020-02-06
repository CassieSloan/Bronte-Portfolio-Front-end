import React, { Component } from "react";
import $ from "jquery";
import "../styles/shared/loadinganimation.scss";

class LoadingAnimation extends Component {
  componentDidMount() {
    // $(window).on("load", function() {
    //   setTimeout(() => {
    //     $(".loader-wrapper").fadeOut("slow");
    //   }, 1500);
    // });

    setTimeout(() => {
      $(".loader-wrapper").fadeOut("slow");
    }, 1500);
  }
  render() {
    const apple = "apple";

    return (
      <div class="loader-wrapper">
        <span class="loader">
          <span class="loader-inner"></span>
        </span>
      </div>
    );
  }
}

export default LoadingAnimation;
