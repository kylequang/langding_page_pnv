import React, { Component } from "react";
import Intro from "../../components/Video/Intro";
import Found from "../About/Found";
import Need_help from "../About/Need_Help";
import Counter from "../About/Counter";
import { Container, Row } from "react-bootstrap";
import Volunteer from "../../components/Form/Volunteer";
import Value from "../About/Value";
import Introduction from "../About/Introduction";

class Index_HomePage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Intro></Intro>
        </Row>
        <Row>
          <Introduction></Introduction>
        </Row>
        <Found></Found>
        <Value></Value>
        <Counter></Counter>
        <Need_help></Need_help>
        <Volunteer></Volunteer>
      </Container>
    );
  }
}
export default Index_HomePage;
