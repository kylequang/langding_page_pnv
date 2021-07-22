import React, { Component } from "react";
import "./css/partner.scss";
import { Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import get_data from "../../services/getdata";
class IndexPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [],
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
          <Row className="partner"><h1>CÁC ĐỐI TÁC CHÍNH CỦA PNV</h1></Row>  
        {this.state.partners.length && (
          <OwlCarousel className="owl-theme"  items={4} autoplay={true} margin={15}>
            {this.state.partners.map((partner) => {
              return (
                <div class="item">
                  <details>
                    <summary>
                      <Image
                        className="img_partern"
                        src={"./images/Partner/" + partner.img}
                        alt={partner.image}
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