import React, { Component } from "react";

import { Container } from "react-bootstrap";

class Form extends Component {
    render() {
        return (
            <Container
                className="form"
                data-new-gr-c-s-check-loaded="14.1018.0"
                data-gr-ext-installed
            >
                <Container id="root">
                    <Container className="app_app__nxlwr">
                        <form className="app_donationForm__14DOn">
                            <h2 className="app_donationFormTitle__3Qo89">
                                Bạn vui lòng nhập thông tin tại đây để nhận mã
                                hỗ trợ (Please provide your information here to
                                get the donation code):
                            </h2>
                            <Container className="app_donationFormGroup__2cYm3">
                                <label
                                    htmlFor="donation-name"
                                    className="app_donationFormGroupContent__h6cMh"
                                >
                                    <span className="app_groupText__c9VYR">
                                        <span className="app_gray__2pWK1">
                                            Họ và tên của bạn (Your full name)
                                        </span>
                                        <span
                                            className="app_red__VN7RT"
                                            title="Trường này là bắt buộc"
                                        >
                                            *
                                        </span>
                                    </span>
                                    <input
                                        className="app_groupInput__3Xbjj"
                                        type="text"
                                        id="donation-name"
                                        defaultValue
                                    />
                                </label>
                            </Container>
                            <Container className="app_donationFormGroup__2cYm3">
                                <label
                                    htmlFor="donation-email"
                                    className="app_donationFormGroupContent__h6cMh"
                                >
                                    <span className="app_groupText__c9VYR">
                                        <span className="app_gray__2pWK1">
                                            Địa chỉ email của bạn (Your email
                                            address)
                                        </span>
                                        <span
                                            className="app_red__VN7RT"
                                            title="Trường này là bắt buộc"
                                        >
                                            *
                                        </span>
                                    </span>
                                    <input
                                        className="app_groupInput__3Xbjj"
                                        type="email"
                                        id="donation-email"
                                        defaultValue
                                    />
                                </label>
                            </Container>
                            <Container className="app_donationFormGroup__2cYm3">
                                <label
                                    htmlFor="donation-phone"
                                    className="app_donationFormGroupContent__h6cMh"
                                >
                                    <span className="app_groupText__c9VYR">
                                        <span className="app_gray__2pWK1">
                                            Số điện thoại của bạn (Your phone
                                            number)
                                        </span>
                                        <span
                                            className="app_red__VN7RT"
                                            title="Trường này là bắt buộc"
                                        >
                                            *
                                        </span>
                                    </span>
                                    <input
                                        className="app_groupInput__3Xbjj"
                                        type="tel"
                                        id="donation-phone"
                                        defaultValue
                                    />
                                </label>
                            </Container>
                            <Container className="app_donationFormGroup__2cYm3">
                                <label
                                    htmlFor="donation-type"
                                    className="app_donationFormGroupContent__h6cMh"
                                >
                                    <span className="app_groupText__c9VYR">
                                        <span className="app_gray__2pWK1">
                                            Hình thức hỗ trợ (Donation type)
                                        </span>
                                        <span
                                            className="app_red__VN7RT"
                                            title="Trường này là bắt buộc"
                                        >
                                            *
                                        </span>
                                    </span>
                                </label>
                                <select className="typeDonate" id="donateType">
                                    <option className="app_donationFormGroup__2cYm3">
                                        Chọn (Select)
                                    </option>
                                    <option
                                        className="app_donationFormGroup__2cYm3"
                                        value="once"
                                    >
                                        Một lần (Once Time)
                                    </option>
                                    <option
                                        className="app_donationFormGroup__2cYm3"
                                        value="month"
                                    >
                                        Hàng Tháng (Hàng Tháng)
                                    </option>
                                </select>
                            </Container>
                            <Container className="app_donationFormGroup__2cYm3">
                                <label
                                    htmlFor="donation-type"
                                    className="app_donationFormGroupContent__h6cMh"
                                >
                                    <span className="app_groupText__c9VYR">
                                        <span className="app_gray__2pWK1">
                                            Nếu bạn chọn hình thức hàng tháng,
                                            lựa chọn thời gian hỗ trợ
                                        </span>
                                        <span
                                            className="app_red__VN7RT"
                                            title="Trường này là bắt buộc"
                                        >
                                            *
                                        </span>
                                    </span>
                                </label>
                                <select className="timeDonate" id="donateTime">
                                    <option className="app_donationFormGroup__2cYm3">
                                        Chọn (Select)
                                    </option>
                                    <option
                                        className="app_donationFormGroup__2cYm3"
                                        value={12}
                                    >
                                        12 tháng (12 Months)
                                    </option>
                                    <option
                                        className="app_donationFormGroup__2cYm3"
                                        value={9}
                                    >
                                        9 tháng (9 Months)
                                    </option>
                                    <option
                                        className="app_donationFormGroup__2cYm3"
                                        value={6}
                                    >
                                        6 tháng (6 Months)
                                    </option>
                                    <option
                                        className="app_donationFormGroup__2cYm3"
                                        value={3}
                                    >
                                        3 tháng (3 Months)
                                    </option>
                                </select>
                            </Container>
                            <Container className="app_donationFormGroup__2cYm3">
                                <a
                                    href="/"
                                    className="app_donationFormActionsForgot__2C75E"
                                >
                                    Quên mã hỗ trợ cá nhân? (Forgot the donation
                                    code?)
                                </a>
                            </Container>
                            <Container className="app_donationFormActions__Iwgew">
                                <button
                                    className="
                  app_buttonSubmit__1xg3x
                  app_buttonSubmit--invalid__1ZGgC
                "
                                    type="button"
                                >
                                    Gửi (Submit)
                                </button>
                            </Container>
                        </form>
                    </Container>
                </Container>
            </Container>
        );
    }
}

export default Form;
