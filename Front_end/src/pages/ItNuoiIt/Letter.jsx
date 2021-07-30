import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image, Row, Col } from "react-bootstrap";

class Letter extends Component {
  render() {
    return (
      <Carousel class="letter" fade slide fluid>
        <Carousel.Item interval={3000}>
          <Row>
            <Col xs={5}>
              <Image
                id="imgletter"
                className="d-block w-100"
                src="https://i.ibb.co/1fSYW8y/coTrang.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <div className="content-letter">
                <h2>
                  Covid-19 khiến con đường đến trường của các em sinh viên PNV
                  càng trở nên gian nan hơn.
                  <br />
                  PNV và các em sinh viên chưa bao giờ ngần ngại hay đầu hàng
                  trước khó khăn, nhưng trước những đợt sóng dồn dập của covid
                  chúng tôi đang rất cần sự tiếp sức của cộng đồng.
                </h2>
                <h1>Võ Hoàng Thùy Trang</h1>
                <h2>Giám đốc quốc gia</h2>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Row>
            <Col xs={5}>
              <Image
                id="imgletter"
                className="d-block w-100"
                src="https://i.ibb.co/KDzqNqr/letter.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <div className="content-letter">
                <h1>Bức thư gửi đến các kỹ sư IT</h1>
                <h2> Còn hay thức khuya để cày dự án?</h2>
                <h2>
                  PNV hi vọng với sự nỗ lực của các bạn, công ty của bạn vẫn
                  phát triển và tạo ra nhiều giá trị cho cộng đồng.
                </h2>
                <h2>
                  Bạn ơi, Nếu xem phí hoạt động của PNV là một phần mềm thì
                  "Covid-19" là một con "Bug" khó fix nhất. Hàng ngày, các thành
                  viên của PNV vẫn đang miệt mài tìm kiếm những "solution" để
                  phần mềm được triển khai hiệu quả nhất.
                </h2>
                <h2>
                  Vì vậy, PNV đang rất cần các bạn, những chuyên gia về công
                  nghệ thông tin, hỗ trợ PNV tiêu diệt con "bug" khó nhằn này.
                </h2>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Row>
            <Col xs={5}>
              <Image
                id="imgletter"
                className="d-block w-100"
                src="https://i.ibb.co/nD0r5n4/letter3.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <div className="content-letter">
                <h1>Ước mơ to trong một ngôi nhà nhỏ</h1>
                <h2>
                  Có lẽ là một ngôi trường nhỏ, nơi tập trung những sinh viên
                  nghèo có ước mơ lớn, là nơi mà các em có được cơ hội để được
                  tiếp tục đi học, tự tay cầm lấy cần câu và câu những con cá
                  cho cuộc đời chính mình.
                  <br /> Vì sự thành công của các sinh viên sau tốt nghiệp sẽ mở
                  ra nhiều cơ hội khác cho chính người thân của các em sau này
                  hoặc thậm chí trở thành nguồn động lực để các sinh viên nghèo
                  khác tiếp tục đi học.
                </h2>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Letter;
// {"mode":"full","isActive":false}
