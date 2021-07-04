import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap'


class Images extends Component {
    render() {
        return (
            <Row>
                <Col md={2}>
                    <Image src="" height="100%" width="60%" />
                </Col>
                <Col md={8}>
                    <h1> Donate now to Passerelles numériques</h1>
                </Col>
                <Col md={1}>
                    <Image src="" alt="Logo" height="100%" width="60%" />
                </Col>
                <Col md={1}>
                    <Image src="" alt="Logo" height="100%" width="60%" />
                </Col>
            </Row>
        )
    }

}
export default Images;