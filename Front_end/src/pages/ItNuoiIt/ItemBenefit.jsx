import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class ItemBenefit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.children);
    return (
      <Container>
        <Row className="benefit-content">
          <Col xs={4}>
            <Image
              id="image-benefit1"
              className="d-block w-100"
              src={`images/ItNuoiIT/${this.props.children.image}`}
              rounded
            />
          </Col>
          <Col xs={8}>
            <h1>{this.props.children.content}</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ItemBenefit;