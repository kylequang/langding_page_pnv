import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import Header_Top from "./Header_Top";
class Header extends Component {
  render() {
    return (
      <Container fluid>
        <Header_Top></Header_Top>

        <Navbar className="navigation_header" bg="light" expand="lg">
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
              <Nav.Link href="/">
                <Link to="/">
                  <span>Home</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">
                  <span>About Us</span>
                </Link>
              </Nav.Link>
              <NavDropdown title="Blogs" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <span>Sharing</span>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <span>Events</span>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/itnuoiit">
                  <span>ItNuoiIt</span>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/donate">
                  <span>Activity</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/donate">
                  <span>Donation</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">
                  <span>Contact</span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
export default Header;
