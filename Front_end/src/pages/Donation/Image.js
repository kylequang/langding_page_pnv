import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import logo from '../../components/Images/logo.png'; 
import fr from '../../components/Images/language-fr.svg';
import en from '../../components/Images/language-en.svg';

class Images extends Component {
    render() {
        return (
            <Row className="logo-image">
                <Col md={1}></Col>
                <Col md={1} className="logo-image1">
                    <Image src={logo} className="logo-image11" height="100%" width="100%" />
                </Col>
                <Col md={8} className="title">
                    <h2> Donate now to Passerelles numériques</h2>
                </Col>
                <Col md={1} className="logo-image3">
                    <Image src={fr} alt="Logo" height="100%" width="60%" />
                </Col>
                <Col md={1} className="logo-image3">
                    <Image src={en} alt="Logo" height="100%" width="60%" />
                 </Col>
            </Row>
        )
    }

}
export default Images;