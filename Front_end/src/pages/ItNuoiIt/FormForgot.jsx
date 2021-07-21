import React, { Component } from "react";
import { Form, Button, Nav } from "react-bootstrap";
import Call_API from "../../services/CallAPI";
class FormForgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      code: [],
      flat: false,
    };
    this.submitHandle = this.submitHandle.bind(this);
  }

  async submitHandle(e) {
    e.preventDefault();
    await Call_API(`getRecover`, "GET", null).then((res) => {
      this.setState(() => ({
        data: res.data,
      }));
    });
    let recover = document.getElementById("donation-recover").value;
    this.state.data.slice().map((elm, index) => {
      if (elm.email === recover || elm.phone === recover) {
        this.setState({
          code: elm.code,
        });
      } else {
        this.setState({
          flat: true,
        });
      }
    });
  }
  render() {
    console.log(this.state.flat);
    console.log(this.state.code);
    if (this.state.code.length === 0) {
      if (this.state.flat) {
        return (
          <div>
            <p>
              Dữ liệu của bạn không tồn tại trên hệ thống! (Your data does not
              exist on the system!)
            </p>
            <div
              className="form"
              data-new-gr-c-s-check-loaded="14.1018.0"
              data-gr-ext-installed
            >
              <Form
                className="donationForm"
                action="recoverCode"
                method="POST"
                onSubmit={this.submitHandle}
                encType="multipart/form-data"
              >
                <h2 className="donationFormTitle">
                  Bạn hãy cung cấp email/số điện thoại để lấy lại mã hỗ trợ cá
                  nhân (Please provide your email/phone number to get back the
                  donation code):
                </h2>
                <Form.Group className="donationFormGroup">
                  <Form.Label
                    htmlFor="donation-recover"
                    className="app_donationFormGroupContent__h6cMh"
                  >
                    <span className="groupText">
                      Email/số điện thoại của bạn (Your email/phone)
                      <span
                        className="app_red__VN7RT"
                        title="Trường này là bắt buộc"
                      >
                        *
                      </span>
                    </span>
                    <Form.Control
                      className="app_groupInput__3Xbjj"
                      type="text"
                      id="donation-recover"
                    />
                  </Form.Label>
                </Form.Group>
                <Button className="app_buttonSubmit__1xg3x" type="submit">
                  Gửi (Submit)
                </Button>
              </Form>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className="form"
            data-new-gr-c-s-check-loaded="14.1018.0"
            data-gr-ext-installed
          >
            <Form
              className="donationForm"
              action="recoverCode"
              method="POST"
              onSubmit={this.submitHandle}
              encType="multipart/form-data"
            >
              <h2 className="donationFormTitle">
                Bạn hãy cung cấp email/số điện thoại để lấy lại mã hỗ trợ cá
                nhân (Please provide your email/phone number to get back the
                donation code):
              </h2>
              <Form.Group className="donationFormGroup">
                <Form.Label
                  htmlFor="donation-recover"
                  className="app_donationFormGroupContent__h6cMh"
                >
                  <span className="groupText">
                    Email/số điện thoại của bạn (Your email/phone)
                    <span
                      className="app_red__VN7RT"
                      title="Trường này là bắt buộc"
                    >
                      *
                    </span>
                  </span>
                  <Form.Control
                    className="app_groupInput__3Xbjj"
                    type="text"
                    id="donation-recover"
                  />
                </Form.Label>
              </Form.Group>
              <Button className="app_buttonSubmit__1xg3x" type="submit">
                Gửi (Submit)
              </Button>
            </Form>
          </div>
        );
      }
    } else {
      return (
        <div className="recover">
          <p>Yêu cầu đã được hoàn tất! (The request has been completed!)</p>
          <p>
            Mã hỗ trợ cá nhân của bạn là: (Your donation code is:)
            {this.state.code}
          </p>
          <Nav.Link href="/" className="divheader">
            <Button className="app_buttonSubmit__1xg3x">
              Quay lại trang chủ
            </Button>
          </Nav.Link>
        </div>
      );
    }
  }
}

export default FormForgot;
