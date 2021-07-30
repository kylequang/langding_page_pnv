import React, { Component } from "react";
import Map from "./Map";
import Address from "./Address";
import { Col, Row } from "react-bootstrap";
import FContact from "../../components/Form/FContact";
class Index_Contact extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Address></Address>
          </Col>
          <Col>
            <FContact></FContact>
          </Col>
        </Row>
        <Row>
          <Map></Map>
        </Row>
      </>
    );
  }
}

export default Index_Contact;
