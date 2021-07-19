import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./header.css";
class HeaderTop extends Component {
  render() {
    return (
      <Container fluid className="header-top">
        <Row id="run_text">
          <marquee>
            {" "}
            <i>"Passerelles numériques" </i> là tổ chức phi chính phủ của Pháp
            thành lập năm 2005 và hiện có ba trung tâm đào tạo tại Campuchia,
            Philippines và Việt Nam
          </marquee>
        </Row>
      </Container>
    );
  }
}

export default HeaderTop;
