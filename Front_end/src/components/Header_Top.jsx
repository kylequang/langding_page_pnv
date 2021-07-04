import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
class Header_Top extends Component {
    render() {
        return (
            <Container fluid className="header-top">
                <Container fluid className="container-fluid">
                    <Row>
                        <Col sm={1} md={1} lg={1} className=" text-left fh5co-link">
                            <a href="#">FAQ</a>
                            <a href="#">Forum</a>
                            <a style={{ marginRight: '20px' }} href="https://vi-vn.facebook.com/PNVtuyensinh/" className="grow"><i className="icon-facebook2" /></a>
                        </Col>
                        <Col className="text-left" sm={11} md={11} lg={11} id="run_text">
                            <marquee style={{ color: 'white' }}> <i>"Passerelles numériques" </i> là tổ chức phi chính phủ của
                                Pháp thành lập năm 2005 và hiện có ba trung tâm đào tạo tại Campuchia,
                                Philippines và Việt Nam</marquee>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Header_Top;