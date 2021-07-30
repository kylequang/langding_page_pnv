import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ModalVideo from "react-modal-video";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <Container fluid className="countarup_area">
        <h1>PN VIỆT NAM VÀ 10 NĂM TÁC ĐỘNG BỀN VỮNG CHO XÃ HỘI VIỆT NAM</h1>
        <Container>
          <Row>
            <Col lg={3} sm={6} md={4} className="counter_item">
              <i class="fas fa-graduation-cap"></i>
              <h4>Sinh viên đang theo học</h4>
              <h2 className="counter">127</h2>
            </Col>
            <Col lg={3} sm={6} md={4} className="counter_item">
              <i class="fas fa-user-graduate"></i>
              <h4>Hội Cựu sinh viên</h4>
              <h2 className="counter" id="cl350">
                350
              </h2>
            </Col>
            <Col lg={3} sm={6} md={4} id="number700" className="counter_item">
              <i class="fas fa-dollar-sign"></i>
              <h4>Mức lương TB </h4>
              <h2 className="Counter" id="cl350">
                700 $
              </h2>
            </Col>
            <Col lg={3} sm={6} md={4} className="counter_item">
              <i class="far fa-building"></i>
              <h4>Sinh viên có việc làm</h4>
              <h2>
                <span className="counter">94%</span>
              </h2>
            </Col>

            <Container className="wath_video">
              <a className="popup-youtube" onClick={this.openModal}></a>
            </Container>

            <ModalVideo
              id="video"
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="eh97v0k0poI"
              onClose={() => this.setState({ isOpen: false })}
            />
          </Row>
        </Container>
        {/* <Share></Share> */}
      </Container>
    );
  }
}

export default Counter;
