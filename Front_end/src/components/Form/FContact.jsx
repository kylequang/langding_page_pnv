import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class FContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      content: "",
    };
  }
  handleAddSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("content", this.state.content);

    fetch("http://localhost:8000/api/mailcontact", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json();
      }) //ko có return thì kết quả data là undefined
      .then((data) => {
        //console.log(data);
        if (data.status === "error") {
          console.log(data.errors);
        } else {
        } //hết else
      }); //sau khi nhấn nút submit trên form Add Car thì trả về data, bên phía hàm handleAddSubmit() bên cha là carList.js sẽ nhận lại
    alert("Gửi mail thành công");
    window.location.reload();
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangeContent = (e) => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <Form
        onSubmit={this.handleAddSubmit}
        encType="multipart/form-data"
        method="post"
      >
        <h4>Đăng kí để cập nhật thông tin mới</h4>
        <Form.Group className="mb-3" controlId="Your name">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={this.onChangeName}
            placeholder="your name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Your name">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={this.onChangeEmail}
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            onChange={this.onChangeContent}
            rows={3}
          />
        </Form.Group>

        <Button type="submit" value="send">
          Gửi
        </Button>
      </Form>
    );
  }
}
export default FContact;
