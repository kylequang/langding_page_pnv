import React, { Component } from "react";
import { Col } from "react-bootstrap";
class Intro extends Component {
  render() {
    return (
      <>
        <Col md={1} lg={1} sm={1}></Col>
        <Col md={10} lg={10} sm={10}>
          {" "}
          <video controls width="100%">
            <source
              src="videos/PN Việt Nam - Học bổng CNTT .mp4"
              type="video/mp4"
            />
          </video>
        </Col>
        <Col md={1} lg={1} sm={1}></Col>
      </>
    );
  }
}
export default Intro;
