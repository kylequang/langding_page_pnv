import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="row ">
          <div className="col-md-2">
            <div className="logo">
              <img
                src="https://alchetron.com/cdn/passerelles-numriques-c7c64324-79b3-4c38-a7d4-83deaaaaae9-resize-750.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-10">
            <div id="themfooter">
              <div class="row">
                <div className="col-md-3 col-6 item">
                  <h4>
                    <b>TRUNG TÂM</b>
                  </h4>
                  <a href="https://www.passerellesnumeriques.org/vi/cac-trung-tam/campuchia/">
                    <h4>Campuchia</h4>
                  </a>
                  <a href="https://www.passerellesnumeriques.org/vi/cac-trung-tam/philippines/">
                    <h4>Philippines</h4>
                  </a>
                  <a href="https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/">
                    <h4>Việt Nam</h4>
                  </a>
                </div>
                <div className="col-md-3 col-6 item">
                  <h4>
                    <b>CÁC ĐỐI TÁC</b>
                  </h4>
                  <a href="#">
                    <h4>Họ đã hỗ trợ chúng tôi</h4>
                  </a>
                  <a href="#">
                    <h4>Hãy là đối tác của PN</h4>
                  </a>
                </div>
                <div className="col-md-2  col-6 item">
                  <h4>
                    <b>TUYỂN DỤNG</b>
                  </h4>
                  <h4>
                    <b>TIN TỨC</b>
                  </h4>
                  <h4>
                    <b>LIÊN HỆ</b>
                  </h4>
                </div>

                <div className="col-md-4  col-6 item">
                  <div id="lienket">
                    <h3>
                      <b>Kết Nối Ngay</b>
                    </h3>
                    <p className="fh5co-social-icons">
                      <a href="https://www.facebook.com/passerelles.numeriques">
                        <i
                          className="fab fa-facebook"
                          style={{ fontSize: 22, color: "blue" }}
                        />
                      </a>
                      <a href="https://www.google.com/maps/place/Passerelles+num%C3%A9riques+Vietnam/@16.0598021,108.2413093,17z/data=!3m1!4b1!4m5!3m4!1s0x31421836ed15dfc9:0x99c3cc369a33576c!8m2!3d16.059797!4d108.243498">
                        <i
                          className="fa fa-map-marker"
                          style={{ fontSize: 22, color: "#d54d41" }}
                          aria-hidden="true"
                        />
                      </a>
                      <a href="#">
                        <i
                          className="fa fa-envelope"
                          aria-hidden="true"
                          style={{ fontSize: 22, color: "rgb(68 179 225)" }}
                        />
                      </a>
                      <a href="https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/">
                        <i
                          className="fa fa-globe"
                          aria-hidden="true"
                          style={{ fontSize: 25, color: "#df0022" }}
                        />
                      </a>
                      <a href="https://www.youtube.com/user/PasserellesNumerique">
                        <i
                          className="fab fa-youtube"
                          aria-hidden="true"
                          style={{ fontSize: 25, color: "#df0022" }}
                        />
                      </a>
                    </p>
                    <h4>Hãy liên hệ với chúng tôi !</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="sanxuat">
          <h4>Đã sản xuất tháng 7 năm 2021</h4>
        </div>
      </div>
    );
  }
}
export default Footer;
