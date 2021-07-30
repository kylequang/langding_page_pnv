import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import get_data from "../../services/get-data";
import "./css/staff.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: [],
    };
  }
  componentDidMount = async () => {
    this.setState({
      staffs: await get_data("staff", this.state.staffs),
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
        items: 6,
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
      <Container fluid className="staff">
        <h1>Đội Ngũ Giáo Viên Của Chúng Tôi</h1>
        <Carousel responsive={responsive}>
          {this.state.staffs.map((staff) => {
            return (
              <div class="item">
                <details>
                  <summary>
                    <Image className="imgstaff" src={staff.avatar} />
                  </summary>
                  <p className="detail">{staff.name}</p>
                  <span className="detail">{staff.job}</span>
                </details>
              </div>
            );
          })}
        </Carousel>
      </Container>
    );
  }
}
export default Staff;
