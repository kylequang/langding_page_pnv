import React, { Component } from "react";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import Call_API from "../../services/CallAPI";
import Slide from "./Slide";
import Reason from "./Reason.jsx";
import Covid from "./Covid";
import Letter from "./Letter";
import Meaning from "./Meaning";
import Benefit from "./Benefit";
import FormDonate from "./FormDonate";
import Join from "./Join";
class Index_ItNuoiIt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  async componentDidMount() {
    await Call_API(`ITnuoiIT`, "GET", null).then((res) => {
      this.setState(() => ({
        data: res.data,
      }));
    });
  }
  render() {
    console.log(this.state.data);
    if (this.state.data !== null) {
      return (
        <Container fluid>
          <Slide />
          <Container className="container-itnuoiit" fluid>
            {this.state.data.slice().map((elm, index) => {
              if (elm.type === "donate") {
                return (
                  <Container className="reason" fluid>
                    <Reason key={index} donate={elm} />
                  </Container>
                );
              }
            })}
            <Container className="covid" fluid>
              <Covid />
            </Container>
            <Container className="letter" fluid>
              <Letter />
            </Container>
            <Container className="benefit" fluid>
              <Row className="back-benefit">
                <Col xs={4}>
                  <p>Bạn nhận được gì khi tham gia chương trình</p>
                </Col>
                <Col xs={7}>
                  {this.state.data.slice().map((elm, index) => {
                    if (elm.type === "benefit") {
                      return <Benefit key={index} benefit={elm} />;
                    }
                  })}
                </Col>
                <Col xs={1} className="back-benefit"></Col>
              </Row>
            </Container>
            <Container className="meaning" fluid>
              <Meaning />
            </Container>
            <Container className="join" fluid>
              <Join />
            </Container>
            <Container className="form" fluid>
              <FormDonate />
            </Container>
          </Container>
        </Container>
      );
    } else {
      return (
        <Container>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </Container>
      );
    }
  }
}

export default Index_ItNuoiIt;
