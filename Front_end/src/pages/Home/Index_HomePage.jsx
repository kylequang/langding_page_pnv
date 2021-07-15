import React, { Component } from "react";
import Intro from "../../components/Video/Intro";
import Head from "../../components/Video/Head";
import Found from "../About/Found";
import Need_help from "../About/Need_Help";
import Counter from "../About/Counter";
import { Container } from "react-bootstrap";
import Volunteer from "../../components/Form/Volunteer";
import IndexPartner from "../About/Partner";


class Index_HomePage extends Component {
    render() {
        return (
            <Container fluid>
                <Head/>
                <Found></Found>
                <Counter></Counter>
                <Need_help></Need_help>
                <Volunteer></Volunteer>
                <IndexPartner></IndexPartner>
            </Container>
        );
    }
}
export default Index_HomePage;
