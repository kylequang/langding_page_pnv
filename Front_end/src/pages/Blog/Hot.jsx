import React, { Component } from "react";
import Readmore from "../../components/Buttons/ReadMore";

class Hot extends Component {
    render() {
        return (
            <section className="event_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeIn">
                            <div className="event_first">
                                <a href="#" className="heding">
                                    Đăng ký nhận bản tin để cập nhật thông tin
                                    mới nhất từ PN!
                                </a>
                                <p>
                                    Cập nhật tất cả những tin tức, câu chuyện và
                                    góc nhìn từ Passerelles numériques tại đây!.
                                </p>
                                <br></br>
                                <Readmore></Readmore>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeIn"
                            data-wow-delay="0.3s"
                        >
                            <div className="event_item">
                                <a href="#" className="heding">
                                    “Em đã chọn nói không”
                                </a>
                                <p>
                                    Đó là điều mà Hồ T.H., sinh viên năm 2 tại
                                    Passerelles numériques Vietnam (PNV) khóa 21
                                    đã chọn. H. đã chọn nói không với định kiến
                                    về việc con gái đủ tuổi thì nên lấy chồng để
                                    làm tròn đạo hiếu. H. đã chọn nói không với
                                    suy nghĩ nghèo thì không cần học nhiều,
                                    nghỉ... Đọc thêm
                                </p>
                                <a href="#" className="event_img">
                                    <img
                                        height={"350px"}
                                        src="images/blogs/huou.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeIn"
                            data-wow-delay="0.6s"
                        >
                            <div className="event_item">
                                <a href="#" className="heding">
                                    Lớp học bị hư hại do mưa lớn kéo dài ở miền
                                    Trung Việt Nam!
                                </a>
                                <p>
                                    Từ đầu tháng 10 năm 2020 đến nay, người dân
                                    miền Trung Việt Nam đã phải hứng chịu những
                                    đợt thiên tai liên tiếp, bao gồm lũ lụt trên
                                    diện rộng, sạt lở đất và những cơn bão gây
                                    nhiều thiệt hại...
                                </p>
                                <a href="#" className="event_img">
                                    <img
                                        height={"350px"}
                                        src="images/blogs/lulut.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hot;
