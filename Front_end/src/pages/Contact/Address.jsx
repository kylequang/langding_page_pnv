import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Contact_Address extends Component {
  render() {
    return (
      <>
        <h4>Địa Chỉ Chúng Tôi</h4>
        <Table>
          <tbody>
            <tr>
              <td>
                <i
                  className="fa fa-map-marker"
                  style={{ fontSize: 25, color: "#d54d41" }}
                  aria-hidden="true"
                />
              </td>
              <td>
                <a href="#">
                  {" "}
                  99 Tô Hiến Thành, Phước Mỹ, Sơn Trà, Đà Nẵng 550000, ViệtNam
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <i
                  className="fa fa-phone"
                  aria-hidden="true"
                  style={{ fontSize: 25, color: "rgb(65 175 62)" }}
                />
              </td>
              <td>
                <a href="#"> contact@passerellesnumeriques.org</a>
              </td>
            </tr>
            <tr>
              <td>
                <i
                  className="fa fa-globe"
                  aria-hidden="true"
                  style={{ fontSize: 25, color: "#df0022" }}
                />
              </td>
              <td>
                <a href="#"> https://www.passerellesnumeriques.org/en/</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default Contact_Address;
