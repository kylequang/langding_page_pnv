import React, { Component } from "react";
import { Link } from "react-router-dom";
import Donate from "../../components/Buttons/Donate";

import { Container, Row, Col } from "react-bootstrap";

class Need_Help extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <h4>Bạn có thể giúp đỡ chúng tôi!</h4>
            <h2>LÁ LÀNH ĐÙM LÁ RÁCH</h2>
            <p>
              Nhờ vào những tài trợ của các bạn, chúng tôi có thể duy trì hoạt
              động của tổ chức và đóng góp nhiều lợi ích hơn cho cộng đồng..
            </p>

            <p>
              Bạn có thể tạo ra sự khác biệt và thay đổi cuộc sống của những
              thanh niên có hoàn cảnh khó khăn bằng cách hỗ trợ tổ chức
              Passerelles numériques.
            </p>
            <p>
              Bạn có thể chọn một loại hình tài trợ và góp phần vào xây dựng
              Passerelles numériques. Tất cả đều đơn giản và được bảo mật! Hãy
              điền vào mẫu tài trợ dưới đây. Nếu bạn mong muốn chuyển khoản trực
              tiếp cho PN Việt Nam (bằng séc hoặc tiền mặt), vui lòng liên hệ{" "}
              <a href="a" style={{ color: "blue" }}>
                văn phòng PNV
              </a>
              .
            </p>

            <Link
              style={{ marginTop: "20px" }}
              className="container-fluid"
              to="/donate"
            >
              <Donate></Donate>
            </Link>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <iframe
              width="700"
              height="530"
              src="https://www.youtube.com/embed/olcVx8xnwWQ?controls=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Need_Help;
