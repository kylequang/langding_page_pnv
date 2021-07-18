import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Form_contact extends Component {
  render() {
    return (
      <Form>
        <h4>Đăng kí để cập nhật thông tin mới</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button>Gửi</Button>
      </Form>
    );
  }
}
export default Form_contact;
