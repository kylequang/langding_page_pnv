import React, { Component } from "react";
import { Container, Row, Image } from "react-bootstrap";

class Join extends Component {
  render() {
    return (
      <>
        <div className="join">
          <Image
            className="d-block w-100"
            src="https://i.ibb.co/pRjNSJX/Join.jpg"
            alt
          />
          <div
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
              <strong>Bước 1:</strong> Điền thông tin vào khung bên dưới để nhận
              được email chứa mã hỗ trợ cá nhân. (được gửi trong vòng 24 giờ).
            </p>
            <p className="content-join">
              <strong>Bước 2:</strong> Sau khi nhận được mã, bạn vui lòng
              "chuyển khoản theo cú pháp:
              <span class="attention">
                &nbsp;ITnuoiIT Mã hỗ trợ" ( Ví dụ: ITnuoiIT DNTT001)
              </span>
              &nbsp;đến tài khoản ngân hàng của PN Việt Nam:
            </p>
            <Container>
              <li className="content-join">Ngân hàng TECHCOMBANK</li>
              <li className="content-join">
                Tên tài khoản: PASSERELLES NUMERIQUES(PN)
              </li>
              <li className="content-join">
                Số tài khoản:&nbsp;<strong>19134608156019</strong>
              </li>
            </Container>
            <p className="content-join">
              Khoản hỗ trợ hàng tháng của bạn sẽ được cập nhật&nbsp;
              <a
                className="content-link"
                href="/en/itraiseit-transaction-update/"
              >
                <strong>ở đây.</strong>
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Join;
