import React, { Component } from 'react';
import { Col, Form, } from 'react-bootstrap';
import './css/form.css';
class BasicInfo extends Component {
    render() {
        return (
            <Col md={3}>
                <section id="details">
                    <div className="contact-info">
                        <h2>Your Information</h2>
                        <Form className="clearfix">
                            <div className="input-group-2">
                                <label>First Name</label>
                                <input type="text" id="fname" onChange={this.props.myChangeHandler} name="fname" />
                            </div>
                            <div className="input-group-2">
                                <label>Last Name</label>
                                <input type="text" onChange={this.props.onChangeAddDonateHandler} name="lname" />
                            </div>
                            <div className="input-group-1">
                                <label>Email</label>
                                <input type="text" onChange={this.props.onChangeAddDonateHandler} name="email" />
                            </div>
                            <hr />
                            <div className="input-group-1">
                                <label>Street Address</label>
                                <input type="text" onChange={this.props.onChangeAddDonateHandler} name="address" />
                            </div>
                            <div className="input-group-3">
                                <label>City</label>
                                <input type="text" onChange={this.props.onChangeAddDonateHandler} name="city" />
                            </div>
                            <div className="input-group-3">
                                <label>Country</label>
                                <input type="text" onChange={this.props.onChangeAddDonateHandler} name="country" />
                            </div>
                            <div className="input-group-3">
                                <label>Zip Code</label>
                                <input type="text" onChange={this.props.onChangeAddDonateHandler} name="zipcode" />
                            </div>
                        </Form>
                    </div>
                </section>

            </Col>
        )
    }

}
export default BasicInfo;