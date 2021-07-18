import React, { Component } from "react";
import Map from "./Map";

import Contact_Address from "./Infor";

import { Container, Row } from "react-bootstrap";
class Index_Contact extends Component {
  render() {
    return (
      <Container fluid>
        <Contact_Address></Contact_Address>
        <Map></Map>
      </Container>
    );
  }
}

export default Index_Contact;
