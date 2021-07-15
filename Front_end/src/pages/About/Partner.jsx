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
      <Container>
        {this.state.partners.length && (
          <OwlCarousel className="owl-theme" loop items={4} margin={10}>
            {this.state.partners.map((partner) => {
              return (
                <div class="item">
                  <details>
                    <summary>
                      <Image
                        className="img_partern"
                        src={"./images/patner/" + partner.img}
                        alt={partner.img}
                      />
                    </summary>
                    <p>{partner.description}</p>
                  </details>
                </div>
              );
            })}
          </OwlCarousel>
        )}
      </Container>
    );
  }
}

export default IndexPartner;
