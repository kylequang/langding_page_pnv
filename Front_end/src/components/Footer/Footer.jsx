import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="row ">
          <div className="col-md-2">
            {/* col-sm-4 col-lg-2 */}
            <div className="logo">
              <img
                src="https://alchetron.com/cdn/passerelles-numriques-c7c64324-79b3-4c38-a7d4-83deaaaaae9-resize-750.jpg"
                alt=""
                //
              />
            </div>
          </div>

          <div className="col-md-6 ">
            {/* col-sm-4 col-lg-7 */}
            <div class="row">
              <div id="themfooter">
                <div className="col-md-4">
                  <h4>
                    <b>CÁC TRUNG T M</b>
                  </h4>
                  <h4>Campuchia</h4>
                  <h4>Philippines</h4>
                  <h4>Việt Nam</h4>
                </div>
                <div className="col-md-4 ">
                  <h4>
                    <b>CÁC ĐỐI TÁC</b>
                  </h4>
                  <h4>Họ đã hỗ trợ chúng tôi</h4>
                  <h4>Hãy là đối tác của PN</h4>
                </div>
                <div className="col-md-4">
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
              </div>
            </div>
          </div>

          <div className="col-md-3">
            {/* col-sm-4 col-lg-3 */}

            <div id="lienket">
              <br />
              <h3>
                <b>Liên Kết Xã Hội</b>
              </h3>
              <p className="fh5co-social-icons">
                <a href="https://www.facebook.com/passerelles.numeriques">
                  <i
                    className="fab fa-facebook"
                    style={{ fontSize: 25, color: "blue" }}
                  />
                </a>
                <a href="#">
                  <i
                    className="fa fa-map-marker"
                    style={{ fontSize: 25, color: "#d54d41" }}
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fa fa-envelope"
                    aria-hidden="true"
                    style={{ fontSize: 25, color: "rgb(68 179 225)" }}
                  />
                </a>
                <a href="https://twitter.com/passerellesnume">
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
              <h4>Hãy liên hệ với chúng tôi</h4>
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
