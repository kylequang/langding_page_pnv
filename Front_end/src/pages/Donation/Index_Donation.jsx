import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Donate from "./Donate";
import DonateAmount from "./DonateAmount";
import BasicInfo from "./BasicInfo";
import Payment from "./Payment";
import Images from "./Image";
import DonateImg from "./DonateImg";
import "./Donate.scss";

class IndexDonation extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="slide">
            <Image
              src="images/Donate/donate_back.jpg"
              className="img-responsive rounded modal-image donate-img"
              width="100%"
              height="40%"
            />
            <div className="text-img">
              <h1>
                Hãy <span>Donate</span> Để Chia Sẻ Yêu Thương
              </h1>
              <p>
                Hình thức hỗ trợ có thể là những món quà vật chất. Hỗ trợ theo
                hàng tháng hoặc một lần.
              </p>
            </div>
          </Row>
        </Container>

        <Container fluid>
          <Images />
          <Row>
            <Col md={1}></Col>
            <DonateImg />
            {/* <Col xs={6} md={5}>
                            <Donate />
                            <DonateAmount />
                        </Col> */}
            <BasicInfo />
            <Payment />
          </Row>
          <Row>
            <Col xs={5} md={5}></Col>
            <Col xs={4} md={4}>
              <Button variant="danger" className=" confirm">
                CONFIRM
              </Button>
            </Col>
            <Col xs={4} md={4}></Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default IndexDonation;
