import React, { Component } from "react";
import Intro from "../../components/Video/Intro";
import Head from "../../components/Video/Head";
import Found from "../About/Found";
import Leadership from "../About/Leadership";
import Need_help from "../About/Need_Help";
import Counter from "../About/Counter";
import { Container } from "react-bootstrap";
import Volunteer from "../../components/Form/Volunteer";
import IndexPartner from "../About/Partner";
import Header from '../../components/Header/index'
import {
    ScrollingProvider,
    useScrollSection,
    Section,
  } from 'react-scroll-section';

class Index_HomePage extends Component {
    render() {
        return (
            <Container fluid>
                <ScrollingProvider>
                    {/* <Header/> */}
                    <Section id="home"><Head/></Section>
                    {/* <Section id="about"><Found/></Section> */}
                    <Section id="counter"><Counter/></Section>
                    <Section id="partner"><IndexPartner/></Section>
                    <Section id="needhelp"><Need_help/></Section>
                    <Section id="volunteer"><Volunteer/></Section>
                </ScrollingProvider>
                
                
                
                {/* <IndexPartner></IndexPartner>
                <Need_help></Need_help><br/>
                <Volunteer></Volunteer> */}
            </Container>
        );
    }
}
export default Index_HomePage;
