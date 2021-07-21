import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./ItemBenefit";

class Benefit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="benefit" fluid>
        <Row className="back-benefit">
          <Col xs={4}>
            <p>Bạn nhận được gì khi tham gia chương trình</p>
          </Col>
          <Col xs={7}>
            {this.props.benefit.map((elm, index) => {
              return <Item key={index} children={elm} />;
            })}
          </Col>
          <Col xs={1} className="back-benefit"></Col>
        </Row>
      </Container>
    );
  }
}
export default Benefit;
