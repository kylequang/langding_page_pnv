import React, { Component } from "react";
import "./head.scss";
import ModalVideo from "react-modal-video";
import { PlayBtn } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
class Head extends Component {
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
      <Container fluid id="slide">
        <ModalVideo
          id="video"
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="gkLdO8I76LI"
          onClose={() => this.setState({ isOpen: false })}
        />
        <a href="#" onClick={this.openModal}>
          <PlayBtn className="icon" size={70} />
        </a>
      </Container>
    );
  }
}
export default Head;
