import React, { Component } from "react";
import { Container, Image, Row, Col, Spinner } from "react-bootstrap";
class Reasion extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    if (this.props.donate) {
      return (
        <Container>
          <Row>
            <Col xs={6}>
              <Image
                id="image-donate"
                className="d-block w-100"
                src={`images/ItNuoiIT/${this.props.donate.image}`}
              />
            </Col>
            <Col xs={5}>
              <Row className="content-reasion">
                <h1>50%</h1>
                <h2>{this.props.donate.content}</h2>
                {console.log(this.props.donate.content)}
              </Row>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </Container>
      );
    }
  }
}

export default Reasion;
