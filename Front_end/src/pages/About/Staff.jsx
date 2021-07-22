import React, { Component } from "react";
import "./css/partner.scss";
import { Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import get_data from "../../services/getdata";
class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: [],
    };
  }
  componentDidMount = async () => {
    this.setState({
      partners: await get_data("partner", this.state.partners),
    });
  };
  render() {
    return (
      <Container>
          <Row className="partner">
              <h1>CÁC ĐỐI TÁC CHÍNH CỦA PNV</h1>
          </Row>  
        <Row>
                
        </Row>
      </Container>
    );
  }
}

export default Staff;