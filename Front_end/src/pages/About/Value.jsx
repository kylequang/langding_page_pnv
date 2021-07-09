import React, { Component } from "react";
import Call_API from "../../services/CallAPI";
import Subtittle from "../../components/Tittle/SubTittle";
import About from "../../components/Contents/About";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
class Value extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainvalue: [],
      open: false,
      setOpen: false,
    };
  }

  componentDidMount = async () => {
    await Call_API(`mainvalue`, "GET", null).then((db) => {
      this.setState({
        mainvalue: db.data,
      });
    });
  };

  render() {
    return (
      <Container>
        <h1> 5 GIÁ TRỊ CHÍNH CỦA PNV</h1>
        <Row>
          <Col sm={11} md={11} lg={11}>
            <Row>
              {this.state.mainvalue.map((item) => {
                return (
                  <Col>
                    <Subtittle subtittle={item.name_value}></Subtittle>
                    <Collapse in={this.state.open}>
                      <div id="value">
                        <About foundation={item.descriptions}></About>
                      </div>
                    </Collapse>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col sm={1} md={1} lg={1}>
            <Button
              onClick={() =>
                this.setState({
                  open: !this.state.open,
                })
              }
              aria-controls="value"
              aria-expanded={this.state.open}
              style={{ marginBottom: "20px" }}
            >
              Xem thêm
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Value;
