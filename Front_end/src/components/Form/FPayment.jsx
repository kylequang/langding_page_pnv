import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import "./css/Fpayment.css";
class FPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      your_name: "",
      money: "",
      email: "",
      message: "",
      phone: "",
      id_role: "",
      languages: "",
      bank_code: "",
    };
  }

  payWithVNP = async () => {
    const FormData = {
      money: this.state.money,
      email: this.state.email,
      your_name: this.state.your_name,
      message: this.state.message,
      phone: this.state.phone,
      id_role: this.state.id_role,
      languages: this.state.languages,
      bank_code: this.state.bank_code,
    };
    console.log(FormData);
    if (FormData) {
      await axios
        .post(
          "https://langdingpagepnv.herokuapp.com/api/create_payment",
          FormData
        )
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            window.location.assign(res.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Registration failed, please try again");
    }
  };

  onChangeMoney = (e) => {
    this.setState({ money: e.target.value });
  };

  onChangeYour_name = (e) => {
    this.setState({ your_name: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangeMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  onChangeLanguages = (e) => {
    this.setState({ languages: e.target.value });
  };

  onChangeId_role = (e) => {
    this.setState({ id_role: e.target.value });
  };
  onChangeBank_code = (e) => {
    this.setState({ bank_code: e.target.value });
  };
  onChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  };
  onChangeBank_code = (e) => {
    this.setState({ bank_code: e.target.value });
  };

  render() {
    return (
      <Row id="row_donate">
        <Col sm={1} md={4} lg={3}></Col>
        <Col>
          <form id="form-outsize" method="post">
            <div className="row">
              <div id="my-donation">
                <div id="header-donation" className="col">
                  <h3>
                    <b>???ng H??? Ch??ng T??i</b>
                  </h3>
                </div>
                <div id="month-amount" className="col">
                  <br></br>
                  <div className="form-group">
                    <input
                      type="text"
                      className="col"
                      name="your_name"
                      id="name"
                      value={this.state.your_name}
                      onChange={this.onChangeYour_name}
                      placeholder="Nguyen Van A"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="col"
                      name="email"
                      onChange={this.onChangeEmail}
                      value={this.state.email}
                      id="email"
                      placeholder="Example@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      onChange={this.onChangePhone}
                      className="col"
                      value={this.state.phone}
                      id="phone"
                      placeholder="035645823"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="col"
                      name="id_role"
                      onChange={this.onChangeId_role}
                      value={this.state.id_role}
                    >
                      <option value="individual">C?? nh??n</option>
                      <option value="organization">T??? Ch???c</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>L???i nh???n nh??? ?????n ch??ng t??i</label>
                    <br />
                    <textarea
                      name="message"
                      onChange={this.onChangeMessage}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <select
                      name="languages"
                      onChange={this.onChangeLanguages}
                      id="languages"
                      className="col"
                      value={this.state.languages}
                    >
                      <option>Ng??n Ng???</option>
                      <option value="vn">Ti???ng Vi???t</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="bank_code"
                      onChange={this.onChangeBank_code}
                      id="bank_code"
                      className="col"
                      value={this.state.bank_code}
                    >
                      <option value>L???a ch???n ng??n h??ng</option>
                      <option value="NCB"> Ngan hang NCB</option>
                      <option value="AGRIBANK"> Ngan hang Agribank</option>
                      <option value="SCB"> Ngan hang SCB</option>
                      <option value="SACOMBANK">Ngan hang SacomBank</option>
                      <option value="EXIMBANK"> Ngan hang EximBank</option>
                      <option value="MSBANK"> Ngan hang MSBANK</option>
                      <option value="NAMABANK"> Ngan hang NamABank</option>
                      <option value="VNMART"> Vi dien tu VnMart</option>
                      <option value="VIETINBANK">Ngan hang Vietinbank</option>
                      <option value="VIETCOMBANK"> Ngan hang VCB</option>
                      <option value="HDBANK">Ngan hang HDBank</option>
                      <option value="DONGABANK"> Ngan hang Dong A</option>
                      <option value="TPBANK"> Ng??n h??ng TPBank</option>
                      <option value="OJB"> Ng??n h??ng OceanBank</option>
                      <option value="BIDV"> Ng??n h??ng BIDV</option>
                      <option value="TECHCOMBANK">
                        {" "}
                        Ng??n h??ng Techcombank
                      </option>
                      <option value="VPBANK"> Ngan hang VPBank</option>
                      <option value="MBBANK"> Ngan hang MBBank</option>
                      <option value="ACB"> Ngan hang ACB</option>
                      <option value="OCB"> Ngan hang OCB</option>
                      <option value="IVB"> Ngan hang IVB</option>
                      <option value="VISA"> Thanh toan qua VISA/MASTER</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>S??? ti???n ???ng h???</label>
                    <br />
                    <input
                      type="number"
                      className="col"
                      name="money"
                      onChange={this.onChangeMoney}
                      value={this.state.money}
                      id="money"
                      placeholder="1000 VND"
                    />
                  </div>
                  <div className="form-group payment">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.payWithVNP();
                      }}
                    >
                      {" "}
                      Donnet Now{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Col>
        <Col sm={1} md={4} lg={3}></Col>
      </Row>
    );
  }
}
export default FPayment;
