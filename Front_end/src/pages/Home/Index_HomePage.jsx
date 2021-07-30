import React, { Component } from "react";
import Found from "../About/Found";
import NeedHelp from "../About/NeedHelp";
import Value from "../About/Value";
import Intro from "../../components/Video/Intro";
import Counter from "../About/Counter";
import Partner from "../../pages/About/Partner";
import Activity from "../Activity/Activity";
import Staff from "../About/Staff";
import Head from "../../components/Video/Head";
import { Container, Spinner, Image, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Milestones from "../About/Milestone";
import Department from "../About/Department";
import Sharing from "../About/Sharing";
import ScrollTop from "../../components/Buttons/ScrollTop";
import ModalDonate from "../../components/Form/ModalDonate";
import Covid from "../Event/Covid";
class Index_HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: !this.state.loading });
    }, 2000);
  };

  render() {
    if (!this.state.loading) {
      return (
        <Container className="spinner" style={{ marginTop: "30%" }}>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
        </Container>
      );
    } else {
      return (
        <>
          <Head></Head>
          <ModalDonate></ModalDonate>
          <Found></Found>
          <Value></Value>
          <Counter></Counter>
          <br></br>
          <br></br>

          <NeedHelp></NeedHelp>
          <Covid></Covid>
          <Sharing></Sharing>
          <Partner></Partner>
          <Intro></Intro>
          <Activity></Activity>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Milestones></Milestones>
          <Department></Department>
          <br></br>
          <br></br>

          <Staff></Staff>
          <ScrollTop></ScrollTop>
          <Footer></Footer>
        </>
      );
    }
  }
}

export default Index_HomePage;
