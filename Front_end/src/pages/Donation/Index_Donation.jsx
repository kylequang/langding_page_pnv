import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Image, Button, Form, Tabs } from "react-bootstrap";
import BasicInfo from "./BasicInfo";
import Payment from "./Payment";
import Images from "./Image";
import DonateImg from "./DonateImg";
import "./Donate.scss";
import axios from "axios";
// import Slide from "./Slide";
import Call_API from "../../services/CallAPI";
class Index_Donation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      money: 0,
      address: "",
      city: "",
      country: "",
      zipcode: 0,
      donate_method: "PAYPAL",
    };
    this.addDonate = this.addDonate.bind(this);
  }

  async addDonate(e) {
    e.preventDefault();
    const {
      fname,
      lname,
      email,
      money,
      address,
      city,
      country,
      zipcode,
      donate_method,
    } = this.state;

    const _formData = new FormData();
    _formData.append("fname", fname);
    _formData.append("lname", lname);
    _formData.append("email", email);
    _formData.append("money", money);
    _formData.append("address", address);
    _formData.append("city", city);
    _formData.append("country", country);
    _formData.append("zipcode", zipcode);
    _formData.append("donate_method", donate_method);

    alert(_formData.get("donate_method"));
    await Call_API("donate", "POST", _formData).then((res) => {
      console.log("thành công");
    });
  }
  onChangeAddDonateHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        {/* <Slide></Slide>
        <Row>{this.state.messages}</Row>
        <Images /> */}
        <Form onSubmit={this.addDonate}>
          <Row>
            <Col md={1}></Col>
            <DonateImg />
            <Col md={3}>
              <section id="details">
                <div className="contact-info">
                  <h2>Your Information</h2>

                  <div className="input-group-2">
                    <label>First Name</label>
                    <input
                      type="text"
                      id="fname"
                      onChange={this.onChangeAddDonateHandler}
                      name="fname"
                    />
                  </div>
                  <div className="input-group-2">
                    <label>Last Name</label>
                    <input
                      type="text"
                      onChange={this.onChangeAddDonateHandler}
                      name="lname"
                    />
                  </div>
                  <div className="input-group-1">
                    <label>Email</label>
                    <input
                      type="text"
                      onChange={this.onChangeAddDonateHandler}
                      name="email"
                    />
                  </div>
                  <hr />
                  <div className="input-group-1">
                    <label>Street Address</label>
                    <input
                      type="text"
                      onChange={this.onChangeAddDonateHandler}
                      name="address"
                    />
                  </div>
                  <div className="input-group-3">
                    <label>City</label>
                    <input
                      type="text"
                      onChange={this.onChangeAddDonateHandler}
                      name="city"
                    />
                  </div>
                  <div className="input-group-3">
                    <label>Country</label>
                    <input
                      type="text"
                      onChange={this.onChangeAddDonateHandler}
                      name="country"
                    />
                  </div>
                  <div className="input-group-3">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      onChange={this.onChangeAddDonateHandler}
                      name="zipcode"
                    />
                  </div>
                  <div className="input-group-3">
                    <strong>How much?</strong>
                    <br />$
                    <input
                      type="text"
                      onChange={this.onChangeAddDonateHandler}
                      name="money"
                    />
                  </div>
                </div>
              </section>
            </Col>
          </Row>
          <Button type="submit">Gửi</Button>
        </Form>
      </>
    );
  }
}
export default Index_Donation;