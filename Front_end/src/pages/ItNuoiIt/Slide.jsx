import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Slide extends Component {
  render() {
    return (
      <div className="slide">
        <Image
          className="d-block w-100"
          id="image-slide"
          src="./images/ItnuoiIt/ITnuoiIT-banner-2.jpg"
        />
      </div>
    );
  }
}

export default Slide;
