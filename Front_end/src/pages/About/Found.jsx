import React, { Component } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import Call_API from "../../services/CallAPI";

class Found extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildfoundation: [],
      open: false,
      setOpen: false,
    };
  }
  componentDidMount = async () => {
    await Call_API(`buildfoudation`, "GET", null).then((item) => {
      this.setState({
        buildfoundation: item.data,
      });
    });
  };

  render() {
    return (
      <Container fluid className="container-found">
        <Container>
          <h1>Nền Tảng Xây Dựng Dự Án</h1>
          <Row class="row">
            {this.state.buildfoundation.map((item) => {
              return (
                <Col sm={12} md={4} lg={4}>
                  <Container className="content_found">
                    <Container
                      className="sub_content_found"
                      style={{ color: "rgb(51, 146, 235)" }}
                    >
                      <span>
                        <i className={item.icon} />
                      </span>
                      <span>{item.nameofbuild}</span>
                      <p style={{ fontSize: "20px" }}>{item.descriptions}</p>

                      <Collapse in={this.state.open}>
                        <div id="value">
                          <p style={{ fontSize: "20px" }}>
                            {item.descriptions}
                          </p>
                        </div>
                      </Collapse>
                    </Container>
                  </Container>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    );
  }
}
export default Found;
