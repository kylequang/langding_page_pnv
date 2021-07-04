import React, { Component } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
class Reasion extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6}>
                        <Image
                            id="image-donate"
                            className="d-block w-100"
                            src="images/donate.jpg"
                        />
                    </Col>
                    <Col xs={5}>
                        <Row className="content-reasion">
                            <h1>50%</h1>
                            <h2>
                                Quỹ hoạt động của PN đến từ Grant của các tập
                                đoàn lớn
                            </h2>
                        </Row>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        );
    }
}

export default Reasion;
