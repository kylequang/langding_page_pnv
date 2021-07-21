import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';

class DonateImg extends Component {
    render() {
        return (
            <Col md={4}>
                <section id="details">
                    <div className="contact-info">
                        <Row>
                            <Col md={12}>
                                <Row id="traitim0">
                                    <Image
                                        id="traitim"
                                        src="https://i.ibb.co/WG5dpd5/all.jpg"
                                        className="img-responsive rounded modal-image"
                                    />
                                    Nếu bạn muốn hỗ trợ thì hãy điền thông tin phía bên phải.
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Col>
        )
    }
}
export default DonateImg;