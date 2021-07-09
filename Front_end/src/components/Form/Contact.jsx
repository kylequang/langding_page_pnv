import React, { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Container } from "react-bootstrap";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      content: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleCkeditorState = (event, editor) => {
    const data = editor.getData();
    console.log(data);
    this.setState({
      content: data,
    });
  };
  test = () => {
    alert(this.state.content);
  };

  render() {
    console.log("STATE_", this.state);
    return (
      <Container>
        <form className="form-group" onSubmit={this.test}>
          <h1>Contact</h1>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="enter name"
              required
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="enter email"
              required
              className="form-control"
            ></input>
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="enter phone"
              required
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label>Message</label>

            <CKEditor
              editor={ClassicEditor}
              onInit={(editor) => {}}
              onChange={this.handleCkeditorState}
            ></CKEditor>
          </div>
          <div className="form-group">
            <input
              type="submit"
              name="submit"
              required
              className="btn btn-primary"
            />
          </div>
        </form>

        <div className="App">
          <h2>Using CKEditor 5 build in React</h2>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </Container>
    );
  }
}

export default Contact;
