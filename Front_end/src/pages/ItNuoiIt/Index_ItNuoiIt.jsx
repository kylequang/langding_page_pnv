import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Slide from "./Slide";
import Reason from "./Reason";
import Covid from "./Covid";
import Letter from "./Letter";
import Meaning from "./Meaning";
import Benefit from "./Benefit";
import Form from "./Form";
import Join from "./Join";
class Index_ItNuoiIt extends Component {
    render() {
        return (
            <Container fluid>
                <Slide />
                <Container className="container-body" fluid>
                    <Container className="reason" fluid>
                        <Reason />
                    </Container>
                    <Row className="covid">
                        <Covid />
                    </Row>

                    <Container className="letter">
                        <Letter />
                    </Container>

                    <Row className="benefit">
                        <Benefit />
                    </Row>
                    <Row className="meaning">
                        <Meaning />
                        <Join />
                    </Row>
                    <Row className="form">
                        <Form />
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Index_ItNuoiIt;
