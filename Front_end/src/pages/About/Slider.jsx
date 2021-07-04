import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Slider extends Component {
    render() {
        return (
            <div className="fh5co-hero">
                <div className="fh5co-overlay" />
                <div
                    className="fh5co-cover text-center"
                    data-stellar-background-ratio="0.5"
                    style={{ backgroundImage: "url(images/cover_bg_1.jpg)" }}
                >
                    <div className="desc animate-box">
                        <h2>
                            We Are <strong>Non-profit</strong>
                        </h2>
                        <span>
                            Tin tưởng - Trách nhiệm - Đoàn kết - Tôn trọng - Yêu
                            cầu cao
                        </span>
                        <span>
                            <a className="btn btn-primary btn-lg" href="#">
                                Donate Now
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;
