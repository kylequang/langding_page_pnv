import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Donate from "./Donate";
import DonateAmount from "./DonateAmount";
import BasicInfo from "./BasicInfo";
import Payment from "./Payment";
import Processing from "./Process";
import Confirm from "./Confirm";
import Thank from "./Thank";
import Images from "./Image";
import "./Donate.scss";

class IndexDonation extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <figure class="figure">
                        <img src="images/" width="100%" />
                        <figcaption class="figure-caption text-right">
                            A caption for the above image.
                        </figcaption>
                    </figure>
                </Container>

                <Container fluid>
                    <Images />
                    <Row>
                        <Col xs={6} md={5}>
                            <Donate />
                            <DonateAmount />
                        </Col>
                        <BasicInfo />
                        <Payment />
                        <Processing />
                        <Confirm />
                        <Thank />
                    </Row>
                </Container>
            </>
        );
    }
}
export default IndexDonation;
