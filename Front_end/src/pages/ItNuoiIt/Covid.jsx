import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Item from "./ItemCovid";
class Covid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row className="container-covid">
          <Col xs={5}>
            <Image
              id="image-covid"
              className="d-block w-100"
              src="images/ItNuoiIt/corona.jpg"
            />
          </Col>
          <Col xs={5}>
            <Row className="covid-content">
              <h1>39.4%</h1>
              <br />
              <h2>Hỗ nghèo tăng lên khi đại dịch xảy ra</h2>
            </Row>
            <Row className="covid-content">
              <h1>85.7%</h1>
              <Item children={this.props.content} />
            </Row>
            <Row className="covid-content">
              <h1>79%</h1>
              <h2>Quỹ hoạt động hàng năm của PNV còn THIẾU</h2>
            </Row>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default Covid;
