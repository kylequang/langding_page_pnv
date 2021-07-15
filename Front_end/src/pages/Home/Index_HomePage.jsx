import React, { Component } from "react";
import Found from "../About/Found";
import Need_help from "../About/Need_Help";
import Value from "../About/Value";
import Counter from "../About/Counter";
import { Container } from "react-bootstrap";
import Volunteer from "../../components/Form/Volunteer";
import Partner from "../../pages/About/Partner";
import Head from "../../components/Video/Head";
class Index_HomePage extends Component {
  render() {
    return (
      <Container fluid>
        <Head></Head>

        <Found></Found>
        <Value></Value>
        <Counter></Counter>
        <Need_help></Need_help>
        <Partner></Partner>
        <Volunteer></Volunteer>
      </Container>
    );
  }
}
export default Index_HomePage;
