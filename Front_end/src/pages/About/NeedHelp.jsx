import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ModalVideo from "react-modal-video";

import { PlayBtn } from "react-bootstrap-icons";
class NeedHelp extends Component {
  constructor() {
    super();
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
      <Container fluid className="needhelp_container">
        <Image
          className="d-block w-100"
          src="https://i.ibb.co/fqqQWMw/needhelp.jpg"
        />
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12} className="needhelp_content">
              <h4>
                LÁ LÀNH ĐÙM LÁ RÁCH <i class="fas fa-hands-helping"></i>
              </h4>
              <Row>
                <Col>
                  <h2>Bạn có thể giúp đỡ chúng tôi !!!</h2>
                </Col>
                <Col id="button_playvideo">
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="olcVx8xnwWQ"
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <a onClick={this.openModal}>
                    <PlayBtn id="icon_need_play" size={70} />
                    Click! xem ngay
                  </a>
                </Col>
              </Row>

              <p>
                Nhờ vào những tài trợ của các bạn, chúng tôi có thể duy trì hoạt
                động của tổ chức và đóng góp nhiều lợi ích hơn cho cộng đồng..
              </p>

              <Row className="needhelp_subcontent">
                <Col>
                  <p>
                    Bạn có thể tạo ra sự khác biệt và thay đổi cuộc sống của
                    những thanh niên có hoàn cảnh khó khăn bằng cách hỗ trợ tổ
                    chức Passerelles numériques.
                  </p>

                  <p>
                    Bạn có thể chọn một loại hình tài trợ và góp phần vào xây
                    dựng Passerelles numériques. Tất cả đều đơn giản và được bảo
                    mật! Hãy điền vào mẫu tài trợ dưới đây. Nếu bạn mong muốn
                    chuyển khoản trực tiếp cho PN Việt Nam (bằng séc hoặc tiền
                    mặt), vui lòng liên hệ{" "}
                    <a href="contact" style={{ color: "blue" }}>
                      văn phòng PNV
                    </a>
                    .
                  </p>
                  <br></br>
                </Col>
              </Row>
              <a className="redirect" href="donate">
                <h4> Donate Now !!!</h4>
              </a>
              <a className="redirect" href="itnuoiit">
                <h4>Tham gia ITNUOIIT cùng chúng tôi !!!</h4>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default NeedHelp;
