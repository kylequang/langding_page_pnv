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
                                <Row>
                                    <Image
                                        src="images/Donate/all.jpg"
                                        className="img-responsive rounded modal-image"
                                        width="80%"
                                        style={{ height: "40%" }}
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