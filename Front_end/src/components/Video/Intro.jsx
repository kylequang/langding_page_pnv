import React, { Component } from "react";
import "./video.css";
import { Container } from "react-bootstrap";
class Intro extends Component {
  render() {
    return (
      <>
        <Container fluid className="intro">
          <h1>Quy Trình Tuyển Sinh </h1>
          <video id="tuyensinh" controls>
            <source src="videos/tuyensinh.mp4" type="video/mp4" />
          </video>
        </Container>
      </>
    );
  }
}
export default Intro;
