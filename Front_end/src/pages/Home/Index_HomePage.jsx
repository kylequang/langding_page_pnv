import React, { Component } from "react";
import { BoxLoading, CommonLoading, EatLoading } from "react-loading";
import Found from "../About/Found";
import Need_help from "../About/Need_Help";
import Value from "../About/Value";
import Intro from "../../components/Video/Intro";
import Counter from "../About/Counter";
import Volunteer from "../../components/Form/Volunteer";
import Partner from "../../pages/About/Partner";
import Head from "../../components/Video/Head";
import { Container } from "react-bootstrap";
class Index_HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      loading: true,
    });
  };
  render() {
    return (
      <Container fluid>
        <Head></Head>
        <Found></Found>
        <Value></Value>
        <Counter></Counter>
        <Need_help></Need_help>

        <Partner></Partner>

        <Container fluid style={{ textAlign: "center" }}>
          <h1 style={{ textAlign: "center" }}>
            Quy Trình Tuyển Sinh Của Chúng Tôi
          </h1>
          <Intro></Intro>
        </Container>
        <Volunteer></Volunteer>
      </Container>
    );
  }
}

export default Index_HomePage;
