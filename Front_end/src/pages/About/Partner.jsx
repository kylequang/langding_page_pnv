import React, { Component } from "react";
import { Container, Accordion, Card, Image, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class IndexPartner extends Component {
  render() {
    return (
      <>
        <Container>
          <h3>Các đối tác của chúng tôi</h3>
          <OwlCarousel
            className="owl-theme"
            items={4}
            loop
            margin={15}
            autoplay={true}
          >
            <div class="item">
              <Image
                src="images/Partner/DVT-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/Enouvo-1-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/J.P.Morgan.jpg"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/KMS-Technology-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/Laidon-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/LeKhanhTech-1-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/linkbynet-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/logo_blancmesnil-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/logo_FondationAmanjaya-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/Logo_Luciole.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/microsoft-logo-400x284.jpg"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/motorola-solutions-foundation-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/PYCO_Square-400x284.png"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
            <div class="item">
              <Image
                src="images/Partner/Thales_logo.jpg"
                alt="Owl Image"
                height="30%"
                width="30%"
              />
            </div>
          </OwlCarousel>
        </Container>
      </>
    );
  }
}

export default IndexPartner;
