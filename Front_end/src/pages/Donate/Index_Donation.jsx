import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import BasicInfo from "./BasicInfo";
import Payment from "./Payment";
import Images from "./Image";
import DonateImg from "./DonateImg";
import "./Donate.scss";
import axios from "axios";
import Slide from "./Slide";
import Call_API from "../../services/CallAPI";
class Index_Donation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDonate: {
        fname: "",
        lname: "",
        email: "",
        money: 0,
        address: "",
        city: "",
        country: "",
        zipcode: 0,
        donate_method: "",
      },
      messages: "",
    };
  }
  componentDidMount = async () => {};
  addDonate = () => {
    axios
      .post("http://localhost:8000/api/donate/", this.state.newDonate)
      .then((res) => {
        console.log("from handle submit", res);
        this.setState({
          newDonate: {
            fname: "",
            lname: "",
            email: "",
            money: 0,
            address: "",
            city: "",
            country: "",
            zipcode: 0,
            donate_method: "",
          },
          messages: "",
        });
      });
  };
  // addDonate = async () => {

  //   alert ("hihih");
  //   await Call_API(`donate`, "POST", this.state.newDonate).then((response) => {
  //       this.setState({
  //         newDonate: {
  //             fname: "",
  //             lname: "",
  //             email: "",
  //             money:0,
  //             address: "",
  //             city:"",
  //             country: "",
  //             zipcode:0,
  //             donate_method:""
  //           },
  //           messages:"Not message"
  //       });
  //       // if (
  //       //   response.data.status === "failed" &&
  //       //   response.data.success === false
  //       //   ) {
  //       //   this.setState({
  //       //       messages: response.data.message,
  //       //   });
  //       //   }
  //       //   else{
  //       //       this.setState({
  //       //           messages: response.data.message,
  //       //       });
  //       //   }
  //     });
  // };

  // axios({
  //   method: 'POST',
  //   url:'http://localhost:3000/rooms',
  //   data:{
  //     name:this.state.name,
  //     image:this.state.image,
  //     accommodates:this.state.accommodates,
  //     beds:this.state.beds,
  //     price:this.state.price,
  //     description:this.state.description
  //   }

  onChangeAddDonateHandler = (e) => {
    let { newDonate } = this.state;
    newDonate[e.target.name] = e.target.value;
    this.setState({ newDonate });
  };
  render() {
    return (
      <>
        <Slide></Slide>
        <Row>{this.state.messages}</Row>
        <Images />
        <Form>
          {this.state.newDonate.fname}
          <Row>
            <Col md={1}></Col>
            <DonateImg />
            <BasicInfo
              onChangeAddDonateHandler={this.onChangeAddDonateHandler}
            />
            <Payment onChangeAddDonateHandler={this.onChangeAddDonateHandler} />
          </Row>
          <Row>
            <Col xs={5} md={5}></Col>
            <Col xs={4} md={4} id="buttonconfirm">
              <Button
                variant="danger"
                className=" confirm"
                onClick={() => this.addDonate()}
              >
                CONFIRM
              </Button>
            </Col>
            <Col xs={4} md={4}></Col>
          </Row>
        </Form>
      </>
    );
  }
}
export default Index_Donation;
