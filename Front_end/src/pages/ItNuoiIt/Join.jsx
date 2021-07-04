import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";

class Join extends Component {
    render() {
        return (
            <Container className="join">
                <Image
                    className="d-block w-100"
                    src="images/ItNuoiIt/Join.jpg"
                    alt
                />
                <Container
                    className="
          et_pb_text
          et_pb_module
          et_pb_bg_layout_dark
          et_pb_text_align_left
          et_pb_text_8
        "
                >
                    <p className="content-join">
                        <strong>CÁCH THỨC HỖ TRỢ HÀNG THÁNG:</strong>
                    </p>
                    <p className="content-join">
                        <strong>Bước 1:</strong>&nbsp;Điền thông tin vào khung
                        bên dưới để nhận được email chứa&nbsp;
                        <em>
                            <strong>mã hỗ trợ cá nhân</strong>
                        </em>
                        &nbsp;(<em>được gửi trong vòng 24 giờ</em>)
                    </p>
                    <p className="content-join">
                        <strong>Bước 2:&nbsp;</strong>Sau khi nhận được mã, bạn
                        vui lòng&nbsp;{" "}
                        <em>
                            <strong>chuyển khoản theo cú pháp</strong>
                        </em>
                        <b>&nbsp;</b>
                        <span style={{ fontWeight: 400 }}>
                            ITnuoiIT&nbsp;Mã hỗ trợ&nbsp;(
                        </span>
                        <i>
                            <span style={{ fontWeight: 400 }}>
                                Ví dụ: ITnuoiIT DNTT001)&nbsp;
                            </span>
                        </i>
                        <span style={{ fontWeight: 400 }}>
                            đến tài khoản ngân hàng của PN Việt Nam:
                        </span>
                    </p>
                    <ul>
                        <li className="content-join">Ngân hàng TECHCOMBANK</li>
                        <li className="content-join">
                            Tên tài khoản: PASSERELLES NUMERIQUES(PN)
                        </li>
                        <li className="content-join">
                            Số tài khoản:&nbsp;<strong>19134608156019</strong>
                        </li>
                    </ul>
                    <p className="content-join">
                        Khoản hỗ trợ hàng tháng của bạn sẽ được cập nhật&nbsp;
                        <a
                            className="content-link"
                            href="/en/itraiseit-transaction-update/"
                        >
                            <strong>ở đây</strong>
                        </a>
                        .
                    </p>
                </Container>
            </Container>
        );
    }
}

export default Join;
