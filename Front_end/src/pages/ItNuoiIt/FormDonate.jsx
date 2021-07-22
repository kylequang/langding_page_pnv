import React, { Component } from "react";
import { Container, Form, Label, Button, Group } from "react-bootstrap";

class FormDonate extends Component {
  render() {
    return (
      <div
        className="form"
        data-new-gr-c-s-check-loaded="14.1018.0"
        data-gr-ext-installed
      >
        <Form className="donationForm">
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
                <span className="app_red__VN7RT" title="Trường này là bắt buộc">
                  *
                </span>
              </span>
              <Form.Control
                size="lg"
                className="app_groupInput__3Xbjj"
                type="text"
                id="donation-name"
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
                <span className="app_red__VN7RT" title="Trường này là bắt buộc">
                  *
                </span>
              </span>
              <Form.Control
                size="lg"
                className="app_groupInput__3Xbjj"
                type="email"
                id="donation-email"
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
                <span className="app_red__VN7RT" title="Trường này là bắt buộc">
                  *
                </span>
              </span>
              <Form.Control
                size="lg"
                className="app_groupInput__3Xbjj"
                type="tel"
                id="donation-phone"
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
                <span className="app_red__VN7RT" title="Trường này là bắt buộc">
                  *
                </span>
              </span>
            </Form.Label>
            <Form.Control
              size="lg"
              as="select"
              className="typeDonate"
              id="donateType"
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
                Nếu bạn chọn hình thức hàng tháng, lựa chọn thời gian hỗ trợ
                <span className="app_red__VN7RT" title="Trường này là bắt buộc">
                  *
                </span>
              </span>
            </Form.Label>
            <Form.Control
              size="lg"
              as="select"
              className="timeDonate"
              id="donateTime"
            >
              <option className="donationFormGroup">Chọn (Select)</option>
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
            <a href="/" className="app_donationFormActionsForgot__2C75E">
              Quên mã hỗ trợ cá nhân? (Forgot the donation code?)
            </a>
          </Form.Group>
          <Button className="app_buttonSubmit__1xg3x" type="button">
            Gửi (Submit)
          </Button>
        </Form>
      </div>
    );
  }
}
export default FormDonate;