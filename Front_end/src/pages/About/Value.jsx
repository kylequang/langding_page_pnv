import React, { Component } from "react";
import Call_API from "../../services/CallAPI";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
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
      if (db.data) {
        this.setState({
          mainvalue: db.data,
        });
      }
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
                <Col sm={12} md={4}>
                  <span>
                    <i className={item.icon} />
                  </span>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-${item}`}>
                        <strong>{item.descriptions}</strong>.
                      </Tooltip>
                    }
                  >
                    <p>{item.name_value}</p>
                  </OverlayTrigger>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    );
  }
}
export default Value;
