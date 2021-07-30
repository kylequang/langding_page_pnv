import Modal from "react-bootstrap/Modal";
import { Container, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import Call_API from "../../services/CallAPI";
import "./css/ModalDonate.css";
function ModalDonate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandle = (e) => {
    e.preventDefault();
    Call_API("postForm", "POST", {
      name: document.getElementById("modal-name").value,
      email: document.getElementById("modal-email").value,
      phone: document.getElementById("modal-phone").value,
      type: document.getElementById("modal-type").value,
      time: document.getElementById("modal-time").value,
    }).then((res) => {
      handleClose();
      alert("Tham gia thành công!Bạn vui lòng kiểm tra email");
    });
  };
  return (
    <>
      <button className="button-modal" onClick={handleShow}>
        ItNuoiIt
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng ký chương trình ITnuôiIT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="formModal" fluid>
            <div
              className="form-modal"
              data-new-gr-c-s-check-loaded="14.1018.0"
              data-gr-ext-installed
            >
              <Form
                className="modalForm"
                action="postForm"
                method="POST"
                onSubmit={submitHandle}
                encType="multipart/form-data"
              >
                <h2 className="modalTitle">
                  Bạn vui lòng nhập thông tin tại đây để nhận mã hỗ trợ (Please
                  provide your information here to get the donation code):
                </h2>
                <Form.Group className="modalGroup">
                  <Form.Label htmlFor="donation-name" className="modal-label">
                    <span className="modalText">
                      Họ và tên của bạn (Your full name)
                      <span
                        className="app_red__VN7RT"
                        title="Trường này là bắt buộc"
                      >
                        *
                      </span>
                    </span>
                    <Form.Control
                      className="modal-input"
                      type="text"
                      id="modal-name"
                      required
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="modalGroup">
                  <Form.Label htmlFor="donation-email" className="modal-label">
                    <span className="modalText">
                      Địa chỉ email của bạn (Your email address)
                      <span
                        className="app_red__VN7RT"
                        title="Trường này là bắt buộc"
                      >
                        *
                      </span>
                    </span>
                    <Form.Control
                      className="modal-input"
                      type="email"
                      id="modal-email"
                      required
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="modalGroup">
                  <Form.Label htmlFor="donation-phone" className="modal-label">
                    <span className="modalText">
                      Số điện thoại của bạn (Your phone number)
                      <span
                        className="app_red__VN7RT"
                        title="Trường này là bắt buộc"
                      >
                        *
                      </span>
                    </span>
                    <Form.Control
                      className="modal-input"
                      type="text"
                      id="modal-phone"
                      required
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="modalGroup">
                  <Form.Label htmlFor="modal-type" className="modal-label">
                    <span className="modalText">
                      Hình thức hỗ trợ (Donation type)
                      <span
                        className="app_red__VN7RT"
                        title="Trường này là bắt buộc"
                      >
                        *
                      </span>
                    </span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="modal-input"
                    id="modal-type"
                    required
                  >
                    <option className="select">Chọn (Select)</option>
                    <option className="select" value="once">
                      Một lần (Once Time)
                    </option>
                    <option className="select" value="month">
                      Hàng Tháng (Hàng Tháng)
                    </option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="modalGroup">
                  <Form.Label htmlFor="modal-time" className="modal-label">
                    <span className="modalText">
                      Bạn chọn hình thức hàng tháng, lựa chọn thời gian hỗ trợ
                      <span
                        className="app_red__VN7RT"
                        title="Trường này là bắt buộc"
                      >
                        *
                      </span>
                    </span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="modal-input"
                    id="modal-time"
                  >
                    <option className="select" value={0}>
                      Chọn (Select)
                    </option>
                    <option className="select" value={12}>
                      12 tháng (12 Months)
                    </option>
                    <option className="select" value={9}>
                      9 tháng (9 Months)
                    </option>
                    <option className="select" value={6}>
                      6 tháng (6 Months)
                    </option>
                    <option className="select" value={3}>
                      3 tháng (3 Months)
                    </option>
                  </Form.Control>
                </Form.Group>
                <Button className="modal-submit" type="submit">
                  Gửi (Submit)
                </Button>
              </Form>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="close-button" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDonate;
