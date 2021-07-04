import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image, Row, Col } from "react-bootstrap";

class Letter extends Component {
    render() {
        return (
            <Carousel fade slide fluid className="section">
                <Carousel.Item>
                    <Row>
                        <Col sm={5} md={5} lg={5}>
                            <Image
                                style={{ height: "350px" }}
                                className="d-block w-70"
                                src="images/ItNuoiIt/IMG_1177.JPG"
                                roundedCircle
                            />
                        </Col>
                        <Col sm={7} md={7} lg={7}>
                            <div className="content-letter">
                                <h2>
                                    "Covid-19 khiến con đường đến trường của các
                                    em sinh viên PNV càng trở nên gian nan hơn.
                                    PNV và các em chưa bao giờ ngần ngại hai đầu
                                    hàng trước khó khăn nhưng trước những đợt
                                    sóng dồn dập của covid, chúng tôi rất cần sự
                                    tiếp sức của cộng đồng. Đã có rất nhiều
                                    người hỏi tại sao chúng tôi lại tạo cho các
                                    em một chương trình dài hơn và toàn diện như
                                    vậy? Câu trả lời nằm ở khả năng các em có
                                    được một công việc với mức thu nhập ổn định
                                    để thay đổi cuộc sống của bản thân và gia
                                    đình."
                                </h2>
                                <h1>Võ Hoàng Thùy Trang</h1>
                                <h2>Giám đốc quốc gia</h2>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col sm={5} md={5} lg={5}>
                            <Image
                                style={{ height: "350px" }}
                                className="d-block w-70"
                                src="images/ItNuoiIt/letter.jpg"
                                roundedCircle
                            />
                        </Col>
                        <Col sm={7} md={7} lg={7}>
                            <div className="content-letter">
                                <h1>Bức thư gửi đến các kỹ sư IT</h1>
                                <h3> Bạn ơi, Dạo này các bạn có khỏe không?</h3>
                                <h3>
                                    {" "}
                                    Gần đây các bạn có hay thức khuya để cài dự
                                    án không?
                                </h3>
                                <h3>
                                    {" "}
                                    PNV hi vọng rằng với sự nỗ lực của các bạn,
                                    công ty của bạn vẫn phát triển từng ngày và
                                    tạo ra nhiều giá trị cho cộng đồng hơn nữa.
                                </h3>
                                <h3> Bạn ơi,</h3>
                                <h3>
                                    {" "}
                                    Nếu xem phí hoạt động của PNV là một phần
                                    mềm thì "Covid-19" như là một con "Bug" khó
                                    fix nhất. Hàng ngày các thành viên của tổ
                                    chức PNV vẫn đang miệt mài tìm kiếm những
                                    "solution" để phần mềm được triển khai một
                                    cách hiệu quả nhất.
                                </h3>
                                <h3>
                                    {" "}
                                    Và vì vậy, PNV đang rất cần các bạn, những
                                    chuyên gia về công nghệ thông tin hỗ trợ PNV
                                    tiêu diệt con "bug" khó nhằn này.{" "}
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row>
                        <Col sm={5} md={5} lg={5}>
                            <Image
                                style={{ height: "350px" }}
                                className="d-block w-100"
                                src="images/ItNuoiIt/letter3.jpg"
                                roundedCircle
                            />
                        </Col>
                        <Col sm={7} md={7} lg={7}>
                            <div className="content-letter">
                                <h1>Ước mơ to trong một ngôi nhà nhỏ</h1>
                                <h3>
                                    {" "}
                                    Có lẽ là một ngôi trường nhỏ, nơi tập trung
                                    những sinh viên nghèo có ước mơ to, là nơi
                                    mà các em có được cơ hội để được tiếp tục đi
                                    học, tự tay cầm lấy cần câu và câu những con
                                    cá cho cuộc đời chính mình. Vì sự thành công
                                    của các sinh viên sau tốt nghiệp sẽ mở ra
                                    nhiều cơ hội khác cho chính người thân của
                                    các em sau này hoặc thậm chí trở thành nguồn
                                    động lực để các sinh viên nghèo khác tiếp
                                    tục đi học.{" "}
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
