import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Container, Image, Row, Col } from "react-bootstrap";

class Letter extends Component {
  render() {
    return (
      <Carousel class="letter" fade slide fluid>
        <Carousel.Item>
          <Row>
            <Col xs={5}>
              <Image
                id="imgletter"
                className="d-block w-100"
                src="images/ItnuoiIt/IMG_1177.JPG"
                roundedCircle
              />
            </Col>
            <Col>
              <div className="content-letter">
                <h2>
                  "Covid-19 khiến con đường đến trường của các em sinh viên PNV
                  càng trở nên gian nan hơn. PNV và các em chưa bao giờ ngần
                  ngại hai đầu hàng trước khó khăn nhưng trước những đợt sóng
                  dồn dập của covid, chúng tôi rất cần sự tiếp sức của cộng
                  đồng. Đã có rất nhiều người hỏi tại sao chúng tôi lại tạo cho
                  các em một chương trình dài hơn và toàn diện như vậy? Câu trả
                  lời nằm ở khả năng các em có được một công việc với mức thu
                  nhập ổn định để thay đổi cuộc sống của bản thân và gia đình."
                </h2>
                <h1>Võ Hoàng Thùy Trang</h1>
                <h2>Giám đốc quốc gia</h2>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={5}>
              <Image
                id="imgletter"
                className="d-block w-100"
                src="images/ItnuoiIt/letter.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <div className="content-letter">
                <h1>Bức thư gửi đến các kỹ sư IT</h1>
                <h3> Dạo này các bạn có khỏe không?</h3>
                <h3> Còn hay thức khuya để cày dự án?</h3>
                <h3>
                  PNV hi vọng với sự nỗ lực của các bạn, công ty của bạn vẫn
                  phát triển từng ngày và tạo ra nhiều giá trị cho cộng đồng.
                </h3>
                <h3>
                  Bạn ơi, Nếu xem phí hoạt động của PNV là một phần mềm thì
                  "Covid-19" là một con "Bug" khó fix nhất. Hàng ngày, các thành
                  viên của tổ chức PNV vẫn đang miệt mài tìm kiếm những
                  "solution" để phần mềm được triển khai một cách hiệu quả nhất.
                </h3>
                <h3>
                  Vì vậy, PNV đang rất cần các bạn, những chuyên gia về công
                  nghệ thông tin, hỗ trợ PNV tiêu diệt con "bug" khó nhằn này.
                </h3>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={5}>
              <Image
                id="imgletter"
                className="d-block w-100"
                src="images/ItnuoiIt/letter3.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <div className="content-letter">
                <h1>Ước mơ to trong một ngôi nhà nhỏ</h1>
                <h3>
                  Có lẽ là một ngôi trường nhỏ, nơi tập trung những sinh viên
                  nghèo có ước mơ to, là nơi mà các em có được cơ hội để được
                  tiếp tục đi học, tự tay cầm lấy cần câu và câu những con cá
                  cho cuộc đời chính mình. Vì sự thành công của các sinh viên
                  sau tốt nghiệp sẽ mở ra nhiều cơ hội khác cho chính người thân
                  của các em sau này hoặc thậm chí trở thành nguồn động lực để
                  các sinh viên nghèo khác tiếp tục đi học.{" "}
                </h3>
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
