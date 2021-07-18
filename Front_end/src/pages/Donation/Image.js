import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import logo from '../../components/Images/logo.png';
import fr from '../../components/Images/language-fr.svg';
import en from '../../components/Images/language-en.svg';

class Images extends Component {
    render() {
        return (
            <Row>
                <Col md={1}></Col>
                <Col md={1}>
                    <Image src={logo} height="100%" width="100%" />
                </Col>
                <Col md={8} className="title">
                    <h2> Donate now to Passerelles numériques</h2>
                </Col>
                <Col md={1}>
                    <Image src={fr} alt="Logo" height="100%" width="60%" />
                </Col>
                <Col md={1}>
                    <Image src={en} alt="Logo" height="100%" width="60%" />
                </Col>
            </Row>
        )
    }

}
export default Images;