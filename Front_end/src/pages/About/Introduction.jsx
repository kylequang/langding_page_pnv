import React, { Component } from "react";
import { Container, Jumbotron, Button, Row, Col, Modal } from "react-bootstrap";
class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      setShow: false,
      modalShow: false,
    };
  }
  handleClose = () => {
    this.setState({
      setShow: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
      setShow: true,
    });
  };

  render() {
    return (
      <>
        <Container fluid>
          <Jumbotron>
            <Row>
              <Col>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Col>

              <Col>
                <Modal show={this.state.show}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    I will not close if you click outside me. Don't even try to
                    press escape key.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                  </Modal.Footer>
                </Modal>

                <Button variant="primary" onClick={this.handleShow}>
                  Xem
                </Button>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </>
    );
  }
}

export default Introduction;
