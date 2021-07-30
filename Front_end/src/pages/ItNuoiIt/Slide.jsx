import React, { Component } from "react";
import { Image } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { PlayBtn } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import "./css/buttonplay.css";
class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <>
        <div className="slide">
          <Image
            className="d-block w-100"
            id="image-slide"
            src="https://i.ibb.co/VvTkvLv/ITnuoi-IT-banner-2.jpg"
          />
          <a href="#" onClick={this.openModal}>
            <PlayBtn id="btnplay" className="icon" size={70} />
          </a>
        </div>

        <Container fluid id="videoItNuoiIt">
          <ModalVideo
            id="video"
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="wYCqw1L9__c"
            onClose={() => this.setState({ isOpen: false })}
          />
        </Container>
      </>
    );
  }
}

export default Slide;
