import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUp from "../Buttons/SignUp";
class Volunteer extends Component {
  render() {
    return (
      <Container fluid className="become_volunter">
        <Container>
          <Row className="volunter_row">
            <Col sm={9} md={9} lg={9}>
              <h2>ĐĂNG KÍ TUYỂN SINH</h2>
              <input
                type="email"
                name="email_voulunteer"
                placeholder="example@gmail.com"
              ></input>

              <input
                type="text"
                name="email_voulunteer"
                placeholder="example name"
              ></input>
            </Col>
            <Col sm={3} md={3} lg={3}>
              {/* <SignUp></SignUp> */}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Volunteer;
