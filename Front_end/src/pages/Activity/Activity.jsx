import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "./Activity.css";

class Activity extends Component {
  render() {
    return (
      <Container fluid id="activity_containerfluid">
        <div className="activity" id="canvas">
          <div className="title">
            <h1>
              <b> CÁC HÌNH ẢNH HOẠT ĐỘNG CỦA PNV</b>
            </h1>
          </div>

          <div className="row hoatdong-img">
            <div className="col-md-6 col-lg-4 co hinhanh">
              <div className="item">
                {" "}
                <Image
                  id="imgletter"
                  className="d-block"
                  src="images/activity/IMG_1179.JPG"
                />
                <h5>
                  <b>Nụ cười rặng rỡ của các sinh viên </b>
                </h5>
              </div>
              <div className="item">
                {" "}
                <Image
                  id="imgletter"
                  className="d-block"
                  src="images/activity/IMG_1185.JPG"
                />
                <h5>
                  <b>Cuộc thi sáng tạo và mỹ thuật</b>
                </h5>
              </div>
              <div className="item">
                {" "}
                <Image
                  id="imgletter"
                  className="d-block"
                  src="images/activity/IMG_1186.JPG"
                />
                <h5>
                  <b>Thăm môi trường làm việc của các công ty</b>
                </h5>
              </div>
            </div>

            <div className="col-md-6 col-lg-4  hinhanh">
              <div className="item">
                {" "}
                <Image
                  id="imgletter"
                  className="d-block"
                  src="images/activity/IMG_1202.JPG"
                />
                <h5>
                  <b>Giải thi đấu bóng chuyền nữ các khóa</b>
                </h5>
              </div>
              <div className="item">
                {" "}
                <Image
                  id="imgletter"
                  className="d-block"
                  src="images/activity/IMG_1203.JPG"
                />
                <h5>
                  <b>Giải thi đấu bóng chuyền nam các khóa</b>
                </h5>
              </div>
              <div className="item">
                {" "}
                <Image
                  id="imgletter"
                  className="d-block"
                  src="images/activity/IMG_1204.JPG"
                />
                <h5>
                  <b>Hội SA tổ chức sinh nhật cho các sinh viên</b>
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 hinhanh thua">
              <div className="item">
                {" "}
                <Image
                  id="imgletter"
                  className="d-block"
                  src="images/activity/IMG_1208.JPG"
                />
                <h5>
                  <b>Văn nghệ nhân dịp lễ giáng sinh</b>
                </h5>
              </div>
              <div className="item">
                {" "}
                <Image
                  id="imgletter"
                  className="d-block"
                  src="images/activity/IMG_1209.JPG"
                />
                <h5>
                  <b>Thăm môi trường làm việc của các đối tác</b>
                </h5>
              </div>
              <div className="item">
                {" "}
                <Image
                  id="imgletter"
                  className="d-block"
                  src="images/activity/IMG_1211.JPG"
                />
                <h5>
                  <b>Bóng đá luôn hiện hữu với sinh viên PN</b>
                </h5>
              </div>
            </div>
          </div>

          <div className="title">
            <h1>
              <b> CÁC VIDEOS HOẠT ĐỘNG CỦA PNV</b>
            </h1>
          </div>
          <br></br>
          <br></br>
          <Row>
            <Col sm={12} md={4} lg={4}>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/5O5lPnTVEqM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>
                <b>Hoạt động mừng ngày lễ giáng sinh</b>
              </h3>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/wEK-CzwXa4A"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>
                <b>Mừng sinh nhật 10 năm của PNV</b>
              </h3>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/KILSlhN9E2s"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>
                <b>Lễ tốt nghiệp, chuẩn bị ra trường </b>
              </h3>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Activity;
