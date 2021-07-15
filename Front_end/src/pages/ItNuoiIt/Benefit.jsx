import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Benefit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid>
        <Row className="benefit-content">
          <Col xs={4}>
            <Image
              id="image-benefit1"
              className="d-block w-100"
              src={`images/ItNuoiIT/${this.props.benefit.image}`}
              rounded
            />
          </Col>
          <Col xs={8}>
            <h1>{this.props.benefit.content}</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Benefit;
