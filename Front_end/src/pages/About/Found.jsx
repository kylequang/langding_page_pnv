import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Subtittle from "../../components/Tittle/SubTittle";
import About from "../../components/Contents/About";
import Readmore from "../../components/Buttons/ReadMore";
import Call_API from "../../services/CallAPI";
// import axios from "axios";
class Found extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildfoundation: [],
    };
  }
  componentDidMount = async () => {
    await Call_API(`buildfoudation`, "GET", null).then((item) => {
      if (!!item) {
        this.setState({
          buildfoundation: item.data,
        });
      }
    });
  };
  render() {
    return (
      <Container>
        <Row
          style={{ marginBottom: "20px", marginTop: "20px", textAlign: "left" }}
        >
          {this.state.buildfoundation.map((item) => {
            return (
              <Col sm={4} md={4} lg={4}>
                <Container
                  className="feature-left"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <span className="icon">
                    <i className={item.icon} />
                  </span>
                  <Container
                    className="feature-copy"
                    style={{ color: "rgb(51, 146, 235)" }}
                  >
                    <Subtittle subtittle={item.nameofbuild}></Subtittle>
                    <About foundation={item.descriptions}> </About>
                  </Container>
                </Container>
              </Col>
            );
          })}
          <Readmore></Readmore>
        </Row>
      </Container>
    );
  }
}
export default Found;
