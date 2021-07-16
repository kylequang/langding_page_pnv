import React, { Component } from "react";

import Map from "./Map";
import Form from "./Form";
import DiaChi from "./Infor";
import Slide from "./Slide";
class Index_Contact extends Component {
  render() {
    return (
      <div className="container">
        <div id="gioithieu">
          <Slide />
        </div>

        <div id="form">
          
          <form action="#">
            <div className="row">
              <div className="col-md-6 diachi">
                <br />
                <DiaChi />
              </div>
              <div className="col-md-6 formNhap">
                <br />
                <Form />
              </div>
            </div>
          </form>
          <div>
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default Index_Contact;
