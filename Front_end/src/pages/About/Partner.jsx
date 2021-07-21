import React, { Component } from "react";
import "./css/partner.scss";
import { Container, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import get_data from "../../services/get-data";
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
    return (
      <Container fluid id="patner">
        <h1>Đối Tác Của Chúng Tôi</h1>
        {this.state.partners.length && (
          <OwlCarousel
            className="owl-theme"
            loop
            autoPlay
            items={5}
            margin={30}
          >
            {this.state.partners.map((partner) => {
              return (
                <Container class="item">
                  <details>
                    <summary>
                      <Image
                        className="img_partern"
                        src={partner.img}
                        alt={partner.img}
                      />
                    </summary>
                    <p>{partner.description}</p>
                  </details>
                </Container>
              );
            })}
          </OwlCarousel>
        )}
      </Container>
    );
  }
}

export default IndexPartner;
