import React, { Component } from "react";
import video from "./video.css";
import { Container } from "react-bootstrap";
class Intro extends Component {
  render() {
    return (
      // autoPlay loop
      <>
        <Container fluid className="intro">
          <h1 style={{ textAlign: "center" }}>
            Quy Trình Tuyển Sinh Của Chúng Tôi
          </h1>
          <video id="tuyensinh" controls>
            <source src="videos/tuyensinh.mp4" type="video/mp4" />
          </video>
        </Container>
      </>
    );
  }
}
export default Intro;
