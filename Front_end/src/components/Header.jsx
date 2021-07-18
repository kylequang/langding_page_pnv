import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import Header_Top from "./Header_Top";
class Header extends Component {
  render() {
    return (
      <Container fluid>
        <Header_Top></Header_Top>
        {/* bg="light" */}
        <Navbar className="navigation_header" expand="lg">
          <Navbar.Brand>
            <Image id="logo" src="images/logo_homepage.png" />
            <i class="fas fa-globe"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="divheader">
                <span>Home</span>
              </Nav.Link>
              <Nav.Link href="about" className="divheader">
                <span>About</span>
              </Nav.Link>
              <Nav.Link href="blog" className="divheader">
                <span>News</span>
              </Nav.Link>
              <Nav.Link href="itnuoiit" className="divheader">
                <span>
                  <strong>ItNuoiIt</strong>
                </span>
              </Nav.Link>
              <Nav.Link href="activity" className="divheader">
                <span>Activity</span>
              </Nav.Link>
              <Nav.Link href="donate" className="divheader">
                <span>
                  <strong>Donation</strong>
                </span>
              </Nav.Link>
              <Nav.Link href="contact" className="divheader">
                <span>Contact</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
export default Header;
