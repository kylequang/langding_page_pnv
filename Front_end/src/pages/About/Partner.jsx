import React, { Component } from "react";
import { Container, Accordion, Card, Image, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import logo1 from "../../components/Images/Partner/DVT-400x284.png";
import logo2 from "../../components/Images/Partner/Enouvo-1-400x284.png";
import logo3 from "../../components/Images/Partner/J.P.Morgan.jpg";
import logo4 from "../../components/Images/Partner/KMS-Technology-400x284.png";
import logo5 from "../../components/Images/Partner/Laidon-400x284.png";
import logo6 from "../../components/Images/Partner/LeKhanhTech-1-400x284.png";
import logo7 from "../../components/Images/Partner/linkbynet-400x284.png";
import logo8 from "../../components/Images/Partner/logo_blancmesnil-400x284.png";
import logo9 from "../../components/Images/Partner/logo_FondationAmanjaya-400x284.png";
import logo10 from "../../components/Images/Partner/Logo_Luciole.png";
import logo11 from "../../components/Images/Partner/microsoft-logo-400x284.jpg";
import logo12 from "../../components/Images/Partner/motorola-solutions-foundation-400x284.png";
import logo13 from "../../components/Images/Partner/PYCO_Square-400x284.png";
import logo14 from "../../components/Images/Partner/Thales_logo.jpg";
class IndexPartner extends Component {
    render() {
        return (
            <>
                <Container>
                    <OwlCarousel
                        className="owl-theme"
                        items={4}
                        loop
                        margin={15}
                        autoplay={true}
                    >
                        <div class="item">
                            <Image
                                src={logo1}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo2}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo3}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo4}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo5}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo6}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo7}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo8}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo9}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo10}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo11}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo12}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo13}
                                alt="Owl Image"
                                height="30%"
                                width="30%"
                            />
                        </div>
                        <div class="item">
                            <Image
                                src={logo14}
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
