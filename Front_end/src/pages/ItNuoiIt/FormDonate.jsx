import React, { Component } from "react";
import { Form, Button, Image } from "react-bootstrap";
import Call_API from "../../services/CallAPI";

class FormDonate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
    };
    this.submitHandle = this.submitHandle.bind(this);
  }

  async submitHandle(e) {
    e.preventDefault();
    await Call_API("postForm", "POST", {
      name: document.getElementById("donation-name").value,
      email: document.getElementById("donation-email").value,
      phone: document.getElementById("donation-phone").value,
      type: document.getElementById("donateType").value,
      time: document.getElementById("donateTime").value,
    }).then((res) => {
      this.setState({
        isSubmit: true,
      });
    });
  }
  render() {
    if (this.state.isSubmit) {
      return (
        <div>
          <h2>Đăng ký thành công! Vui lòng kiểm tra Email để nhận mã.</h2>
          <Image className="d-block w-100" src="images/ItnuoiIt/thank.png" />
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
            action="postForm"
            method="POST"
            onSubmit={this.submitHandle}
          >
            <h2 className="donationFormTitle">
              Bạn vui lòng nhập thông tin tại đây để nhận mã hỗ trợ (Please
              provide your information here to get the donation code):
            </h2>
            <Form.Group className="donationFormGroup">
              <Form.Label
                htmlFor="donation-name"
                className="app_donationFormGroupContent__h6cMh"
              >
                <span className="groupText">
                  Họ và tên của bạn (Your full name)
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
                  id="donation-name"
                  required
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="donationFormGroup">
              <Form.Label
                htmlFor="donation-email"
                className="app_donationFormGroupContent__h6cMh"
              >
                <span className="groupText">
                  Địa chỉ email của bạn (Your email address)
                  <span
                    className="app_red__VN7RT"
                    title="Trường này là bắt buộc"
                  >
                    *
                  </span>
                </span>
                <Form.Control
                  className="app_groupInput__3Xbjj"
                  type="email"
                  id="donation-email"
                  required
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="donationFormGroup">
              <Form.Label
                htmlFor="donation-phone"
                className="app_donationFormGroupContent__h6cMh"
              >
                <span className="groupText">
                  Số điện thoại của bạn (Your phone number)
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
                  id="donation-phone"
                  required
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="donationFormGroup">
              <Form.Label
                htmlFor="donation-type"
                className="app_donationFormGroupContent__h6cMh"
              >
                <span className="groupText">
                  Hình thức hỗ trợ (Donation type)
                  <span
                    className="app_red__VN7RT"
                    title="Trường này là bắt buộc"
                  >
                    *
                  </span>
                </span>
              </Form.Label>
              <Form.Control
                as="select"
                className="typeDonate"
                id="donateType"
                required
              >
                <option className="donationFormGroup">Chọn (Select)</option>
                <option className="donationFormGroup" value="once">
                  Một lần (Once Time)
                </option>
                <option className="donationFormGroup" value="month">
                  Hàng Tháng (Hàng Tháng)
                </option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="donationFormGroup">
              <Form.Label
                htmlFor="donation-type"
                className="app_donationFormGroupContent__h6cMh"
              >
                <span className="groupText">
                  Bạn chọn hình thức hàng tháng, lựa chọn thời gian hỗ trợ
                  <span
                    className="app_red__VN7RT"
                    title="Trường này là bắt buộc"
                  >
                    *
                  </span>
                </span>
              </Form.Label>
              <Form.Control as="select" className="timeDonate" id="donateTime">
                <option className="donationFormGroup" value={0}>
                  Chọn (Select)
                </option>
                <option className="donationFormGroup" value={12}>
                  12 tháng (12 Months)
                </option>
                <option className="donationFormGroup" value={9}>
                  9 tháng (9 Months)
                </option>
                <option className="donationFormGroup" value={6}>
                  6 tháng (6 Months)
                </option>
                <option className="donationFormGroup" value={3}>
                  3 tháng (3 Months)
                </option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="donationFormGroup">
              <p
                className="app_donationFormActionsForgot__2C75E"
                onClick={() => this.props.forgot()}
              >
                Quên mã hỗ trợ cá nhân? (Forgot the donation code?)
              </p>
            </Form.Group>
            <Button className="app_buttonSubmit__1xg3x" type="submit">
              Gửi (Submit)
            </Button>
          </Form>
        </div>
      );
    }
  }
}
export default FormDonate;
