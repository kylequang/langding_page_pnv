import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import fr from '../../components/Images/language-fr.svg';
import en from '../../components/Images/language-en.svg';

class Images extends Component {
    render() {
        return (
            <Row className="logo-image">
                <Col sm={2} lg={3} md={1} >
                    <Image id='logo_donate' src="https://i.ibb.co/GcgTNP3/logo.png" />
                </Col>
                <Col lg={7} md={8} sm={9} className="title">
                    <h2> Donate now to Passerelles numériques</h2>
                </Col>
                <Col lg={1} md={1} sm={1} >
                    <Image src={fr} className="iconlanguages" />
                </Col>
                <Col lg={1} md={1} sm={1}  >
                    <Image src={en} className="iconlanguages" />
                </Col>
            </Row>
        )
    }

}
export default Images;