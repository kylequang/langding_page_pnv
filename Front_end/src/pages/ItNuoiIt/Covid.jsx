import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Covid extends Component {
  render() {
    return (
      <Container>
        <Row className="container-covid">
          <Col xs={5}>
            <Image
              id="image-covid"
              className="d-block w-100"
              src="https://i.ibb.co/4FVcxJp/corona.jpg"
            />
          </Col>
          <Col xs={7}>
            <Row className="covid-content">
              <h1>39.4%</h1>
              <br />
              <h2>Hỗ nghèo tăng lên khi đại dịch xảy ra</h2>
            </Row>
            <Row className="covid-content">
              <h1>85%</h1>
              <br />
              <h2>
                Các doanh nghiệp tại Việt Nam bị ảnh hưởng và cắt giảm chi phí,
                bao gồm các khoản từ thiện
              </h2>
            </Row>
            <Row className="covid-content">
              <h1>79%</h1>
              <br />
              <h2>Quỹ hoạt động hàng năm của PNV còn THIẾU</h2>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Covid;
// {"mode":"full","isActive":false}
