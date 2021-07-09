import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Row,
  Col,
  Form,
  Button,
  FormControl,
  Image,
} from "react-bootstrap";
import Header_Top from "./Header_Top";
class Header extends Component {
  render() {
    return (
      <Container fluid fixed-top>
        {/* Header top chạy chữ */}
        <Header_Top></Header_Top>

        {/* header navigation */}

        {/* <Container fluid>
          <Row>
            <Col sm={1} md={1} lg={1}>
              <Image
                src="images/logo_homepage.png"
                style={{
                  height: "60px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginLeft: "20px",
                }}
              />
            </Col>

            <Col sm={11} md={11} lg={11}>
              <nav
                id="fh5co-menu-wrap"
                role="navigation"
                style={{ marginLeft: "600px" }}
              >
                <ul className="sf-menu row" id="fh5co-primary-menu">
                  <Link to="/">
                    <a>Trang Chủ</a>
                  </Link>
                  <Link to="/itnuoiit">
                    <a href="#">ITNUOIIT</a>
                  </Link>
                  <Link to="/about">
                    <a href="about.html">Về chúng tôi</a>
                  </Link>
                  <Link to="/blog">
                    <a href="blog.html">Bài viết</a>
                  </Link>
                  <Link to="/contact">
                    <a href="contact.html">Liên hệ</a>
                  </Link>
                  <Link to="/donate">
                    <a>Ủng hộ</a>
                  </Link>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container> */}

        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Image
              src="images/logo_homepage.png"
              style={{
                height: "60px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <Link to="/">Home </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About Us</Link>
              </Nav.Link>

              <NavDropdown title="Blogs" id="navbarScrollingDropdown">
                <NavDropdown.Item>Events</NavDropdown.Item>
                <NavDropdown.Item>Sharing</NavDropdown.Item>
                <NavDropdown.Item>Tuyển sinh</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/donate">Activity</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/donate">Donation</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
export default Header;
