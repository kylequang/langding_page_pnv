import React, { Component } from "react";
import "../../App.css";
import Call_API from "../../services/CallAPI";
class DiaChi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
    };
  }
  componentDidMount = async () => {
    await Call_API(`contact`, "GET", null).then((item) => {
      !!item &&
      this.setState({
        contact: item.data,
      });
    });
  };
  render() {
    return (
      <div id="infor">
        <h3 className="section-title">ĐỊA CHỈ CHÚNG TÔI</h3>

        {this.state.contact.map((item) => {
           return (
            <ul className="contact">
              <li>
                <i
                  className="fa fa-map-marker"
                  style={{ fontSize: 25, color: "#d54d41" }}
                  aria-hidden="true"
                />

                <a href="#">{item.address}</a>
              </li>
              <li>
                <i
                  className="fa fa-phone"
                  aria-hidden="true"
                  style={{ fontSize: 25, color: "rgb(65 175 62)" }}
                />

                <a href="#"> {item.phoneNumber}</a>
              </li>
              <li>
                <i
                  className="fa fa-envelope"
                  aria-hidden="true"
                  style={{ fontSize: 25, color: "rgb(68 179 225)" }}
                />
                <a href="#"> {item.email}</a>
              </li>
              <li>
                <i
                  className="fa fa-globe"
                  aria-hidden="true"
                  style={{ fontSize: 25, color: "#df0022" }}
                />
                <a href="#"> https://www.passerellesnumeriques.org/en/</a>
              </li>
            </ul>
           );
        })}
      </div>
    );
  }
}

export default DiaChi;
