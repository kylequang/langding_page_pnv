import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container,Button, Row, Col,Navbar,Brand,Nav,Form,FormControl } from 'react-bootstrap';
import Header_Top from './Header_Top';
class Header extends Component {
    render() {
        return (
            <Container fluid fixed-top>
                {/* Header top chạy chữ */}
                <Header_Top></Header_Top>

                {/* header navigation */}
                <header >
                    <Container fluid>
                        <Row>
                            <Col sm={1} md={1} lg={1}>
                                <img src="images/logo_homepage.png" style={{ height: '60px', marginTop: '10px', marginBottom: '10px', marginLeft: '20px' }} />

                            </Col>
                            <Col sm={11} md={11} lg={11} >
                                <nav id="fh5co-menu-wrap" role="navigation" style={{ marginLeft: '600px' }}>
                                    <ul className="sf-menu row" id="fh5co-primary-menu">
                                        <Link to="/">
                                            <a >Trang Chủ</a>
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
                                        <Link to='/donate'>
                                            <a>Ủng hộ</a>
                                        </Link>
                                    </ul>
                                </nav>
                            </Col>

                        </Row>
                    </Container>
                </header>
            </Container>
        );
    }
}
export default Header;