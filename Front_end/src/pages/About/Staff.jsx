import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import get_data from "../../services/get-data";
import "./css/staff.css";
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
    return (
      <Container fluid className="staff">
        <h1>Đối Ngũ Giáo Viên Của Chúng Tôi</h1>
        {this.state.staffs.length && (
          <OwlCarousel loop autoPlay margin={10}>
            {this.state.staffs.map((staff) => {
              return (
                <div class="item">
                  <details>
                    <summary>
                      <Image className="imgstaff" src={staff.avatar} />
                    </summary>
                    <p>{staff.name}</p>
                    <span>{staff.job}</span>
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
export default Staff;
