import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";

class Meaning extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <Carousel responsive={responsive}>
        <div className="mean">
          <Image
            className="d-block w-100"
            id="mean"
            src="https://i.ibb.co/pjzvqxk/Title.png"
            fluid
          />
        </div>
        <div className="mean">
          <Image
            id="mean"
            className="d-block w-100"
            src="https://i.ibb.co/cDzz8Yg/mean1.png"
            fluid
          />
        </div>
        <div className="mean">
          <Image
            id="mean"
            className="d-block w-100"
            src="https://i.ibb.co/r3GhVYr/mean2.png"
            fluid
          />
        </div>
        <div className="mean">
          <Image
            id="mean"
            className="d-block w-100"
            src="https://i.ibb.co/ZfQLsKk/mean3.png"
            fluid
          />
        </div>
        <div className="mean">
          <Image
            id="mean"
            className="d-block w-100"
            src="https://i.ibb.co/KL9zbT7/mean4.png"
            fluid
          />
        </div>
      </Carousel>
    );
  }
}

export default Meaning;
