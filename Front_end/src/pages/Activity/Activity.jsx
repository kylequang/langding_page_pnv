import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Activity.css";
class Activity extends Component {
  render() {
    return (
      <div className="activity">
        <div className="title">
          <h1>
            <b> CÁC HÌNH ẢNH HOẠT ĐỘNG CỦA PNV</b>
          </h1>
        </div>
        <div className="row hoatdong-img">
          <div className="col-md-6 col-lg-4 co hinhanh">
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1174.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1199.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1176.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1179.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1185.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1176.JPG"
            />
          </div>

          <div className="col-md-6 col-lg-4  hinhanh">
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1199.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1200.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1197.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1202.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1203.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1204.JPG"
            />
          </div>
          <div className="col-md-6 col-lg-4 hinhanh thua">
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1205.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1206.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1207.JPG"
            />
            <Image
              id="imgletter"
              className="d-block"
              src="images/activity/IMG_1208.JPG"
            />
          </div>
        </div>
        <div className="title">
          <h1>
            <b> CÁC VIDEOS HOẠT ĐỘNG CỦA PNV</b>
          </h1>
        </div>
        <div className="hoatdong">
          <div className="video">
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
          </div>

          <div className="video">
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
          </div>

          <div className="video">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
