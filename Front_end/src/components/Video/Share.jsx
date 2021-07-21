import React, { Component } from "react";
import { Container } from "react-bootstrap";
class Share extends Component {
  render() {
    return (
      <Container>
        <iframe
          id="video10nam"
          src="https://www.youtube.com/embed/eh97v0k0poI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Container>
    );
  }
}

export default Share;
