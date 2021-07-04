import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
class Slide extends Component {
    render() {
        return (
            <Carousel slide fade="true" fluid>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ItNuoiIT/ITraiseITbanner.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption id="introduce">
                        ITnuoiIT là chương trình gây quỹ cộng đồng nhằm chung
                        sức với PNV để dự án "Xây cầu công nghệ" cho các kỹ sư
                        CNTT tương lai được tiếp tục trong giao đoạn đặc biệt
                        khó khăn này.
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ItNuoiIt/122421140_2832178957016825_3157549917884354789_n.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 id="meaning">Mang trong mình sứ mệnh to lớn</h1>
                        <h2 className="content-silde">
                            Gây dựng được một cộng đồng IT nuôi IT hỗ trợ 130
                            sinh viên nghèo theo đuổi việc học CNTT.
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ItNuoiIt/122398161_3390525684360224_5534300532096309040_n.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 id="appeal">Hãy tham gia cùng chúng tôi</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slide;
