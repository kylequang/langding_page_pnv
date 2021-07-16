import React, { Component } from "react";
import Call_API from "../../services/CallAPI";
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
  // componentDidMount = async () => {
  //   await Call_API(`mainvalue`, "GET", null).then((db) => {
  //     !!db &&
  //     this.setState({
  //       mainvalue: db.data,
  //     });
  //   });
  // };

  componentDidMount = async () => {
    await Call_API(`mainvalue`, "GET", null).then((db) => {
     
        this.setState({
          mainvalue: db.data,
        });
    });
  };



  render() {
    return (
      <Container fluid className="values_containerfluid">
        <Container className="values_container">
          <h1> 5 GIÁ TRỊ CHÍNH </h1>
          <Row className="row_value">
            {this.state.mainvalue.map((item) => {
              return (
                <Col>
                  <i className={item.icon} />
                  <p>{item.name_value}</p>
                  <Collapse in={this.state.open}>
                    <div id="value">
                      <span>{item.descriptions}</span>
                    </div>
                  </Collapse>
                </Col>
              );
            })}
          </Row>

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
            <i class="fas fa-arrow-circle-down"></i>
          </Button>
        </Container>
      </Container>
    );
  }
}
export default Value;
