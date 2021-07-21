import React, { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import HeaderTop from "./HeaderTop";
import Head from "../Video/Head";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <>
        <HeaderTop></HeaderTop>
        <Navbar className="navigation_header" expand="lg">
          <Navbar.Brand>
            <Image id="logo" src="images/logo_homepage.png" />
            <i class="fas fa-globe"></i>
          </Navbar.Brand>
          <Navbar.Toggle id="icontoggle" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/" className="divheader">
                <span>Trang Chủ</span>
              </Nav.Link>
              <Nav.Link href="itnuoiit" className="divheader">
                <span>Dự Án ItNuoiIt</span>
              </Nav.Link>
              <Nav.Link href="donate" className="divheader">
                <span>Ủng Hộ</span>
              </Nav.Link>
              <Nav.Link href="contact" className="divheader">
                <span>Liên Hệ</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Head></Head> */}
      </>
    );
  }
}
export default Header;
