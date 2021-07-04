import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Benefit extends Component {
    render() {
        return (
            <Container>
                <Row className="back-benefit">
                    <Col xs={4}>
                        <p>Bạn nhận được gì khi tham gia chương trình</p>
                    </Col>
                    <Col xs={7}>
                        <Row className="benefit-content">
                            <Col xs={4}>
                                <Image
                                    id="image-benefit"
                                    className="d-block w-100"
                                    src="images/ItNuoiIt/benefit1.png"
                                    rounded
                                />
                            </Col>
                            <Col xs={8}>
                                <h1>
                                    Giấy chứng nhận đã tham gia chương trình IT
                                    nuôi IT
                                </h1>
                            </Col>
                        </Row>

                        <Row className="benefit-content">
                            <Col xs={4}>
                                <Image
                                    id="image-benefit"
                                    className="d-block w-100"
                                    src="images/ItNuoiIt/benefit2.png"
                                    rounded
                                />
                            </Col>
                            <Col xs={8}>
                                <h1>
                                    Thư cập nhật thông tin chuyển khoản hàng
                                    tháng
                                </h1>
                            </Col>
                        </Row>

                        <Row className="benefit-content">
                            <Col xs={4}>
                                <Image
                                    id="image-benefit"
                                    className="d-block w-100"
                                    src="images/ItNuoiIT/benefit3.jpg"
                                    rounded
                                />
                            </Col>
                            <Col xs={8}>
                                <h1>Thăm trường PNV và các em sinh viên</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={1} className="back-benefit"></Col>
                </Row>
            </Container>
        );
    }
}

export default Benefit;
