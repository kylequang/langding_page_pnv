import React, { Component } from "react";
import { Col, Tabs, Tab } from "react-bootstrap";
import Card from "./Card";
import PayPal from "./PayPal";
import DonateButton from "../../components/Buttons/Donation";
class Payment extends Component {
    render() {
        return (
            <Col md={4}>
                <section id="card">
                    <div className="contact-info">
                        <h2>Payment Information</h2>
                        <Tabs
                            defaultActiveKey="card"
                            transition={false}
                            id="noanim-tab-example"
                        >
                            <Tab eventKey="card" title="CARD">
                                <Card />
                            </Tab>
                            <Tab eventKey="paypal" title="BANK">
                                <PayPal />
                            </Tab>
                        </Tabs>
                        {/* <DonateButton title="Confirm" /> */}
                    </div>
                </section>
            </Col>
        );
    }
}
export default Payment;
