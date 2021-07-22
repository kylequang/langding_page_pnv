import React, { Component } from "react";
import { Col, Tabs, Tab } from "react-bootstrap";

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
                            name="donate_method"
                        >
                            <Tab eventKey="card" value="BANK"  onChange={this.props.onChangeAddDonateHandler} title="BANK TRANSFER">
                                
                            </Tab>
                            <Tab eventKey="paypal" value="PAYPAL"  onChange={this.props.onChangeAddDonateHandler} title="PAYPAL">
                                <strong>How much do you want to donate?</strong><br />
                                $ <input type="text" onChange={this.props.onChangeAddDonateHandler} name="money" />      
                            </Tab>
                        </Tabs>
                    </div>
                </section>
            </Col>
        );
    }
}
export default Payment;
