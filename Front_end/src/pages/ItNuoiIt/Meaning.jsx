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
        <div>
          <Image
            className="d-block w-100"
            src="images\ItnuoiIt\Title.png"
            fluid
          />
        </div>
        <div>
          <Image
            className="d-block w-100"
            src="images\ItnuoiIt\mean1.png"
            fluid
          />
        </div>
        <div>
          <Image
            className="d-block w-100"
            src="images\ItnuoiIt\mean2.png"
            fluid
          />
        </div>
        <div>
          <Image
            className="d-block w-100"
            src="images\ItnuoiIt\mean3.png"
            fluid
          />
        </div>
        <div>
          <Image
            className="d-block w-100"
            src="images\ItnuoiIt\mean4.png"
            fluid
          />
        </div>
      </Carousel>
    );
  }
}

export default Meaning;