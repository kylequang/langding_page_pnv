import React, { Component } from "react";
import "./css/partner.scss";
import { Container, Image } from "react-bootstrap";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import get_data from "../../services/get-data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
class IndexPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [],
    };
  }
  componentDidMount = async () => {
    this.setState({
      partners: await get_data("partners", this.state.partners),
    });
  };

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <Container fluid id="patner">
        <h1>Đối Tác Của Chúng Tôi</h1>
        <Carousel responsive={responsive}>
          {this.state.partners.map((partner) => {
            return (
              <div class="item">
                <details>
                  <summary>
                    <Image className="img_partern" src={partner.img} />
                  </summary>
                  <p>{partner.description}</p>
                </details>
              </div>
            );
          })}
        </Carousel>
      </Container>
    );
  }
}

export default IndexPartner;
