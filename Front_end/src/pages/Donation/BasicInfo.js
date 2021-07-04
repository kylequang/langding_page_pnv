import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import DonateButton from '../../components/Buttons/Donation';
class BasicInfo extends Component {
    render() {
        return (
            <Col md={3}>
                <section id="details">
                    <div className="contact-info">
                        <h2>Basic Information</h2>
                        <Form className="clearfix">
                            <div className="input-group-2">
                                <label>First Name</label>
                                <input type="text" />
                            </div>
                            <div className="input-group-2">
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                            <div className="input-group-1">
                                <label>Email Address</label>
                                <input type="text" />
                            </div>
                            <hr />
                            <div className="input-group-1">
                                <label>Street Address</label>
                                <input type="text" />
                            </div>
                            <div className="input-group-3">
                                <label>City</label>
                                <input type="text" />
                            </div>
                            <div className="input-group-3">
                                <label>State</label>
                                <input type="text" />
                            </div>
                            <div className="input-group-3">
                                <label>Zip Code</label>
                                <input type="text" />
                            </div>
                        </Form>
                        <DonateButton title="Next" />
                    </div>
                </section>
            </Col>
        )
    }

}
export default BasicInfo;