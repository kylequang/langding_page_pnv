import React, { Component } from "react";
import Share from "../../components/Video/Share";
class Counter extends Component {
    render() {
        return (
            <section className="countarup_area">
                <h1>
                    PN VIỆT NAM VÀ 10 NĂM TÁC ĐỘNG BỀN VỮNG CHO XÃ HỘI VIỆT NAM
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 counter_item">
                            <i className="flaticon-team" />
                            <h4>Sinh viên đang theo học</h4>
                            <h2 className="counter">127</h2>
                        </div>
                        <div className="col-lg-3 col-sm-6 counter_item">
                            <i className="flaticon-social-care" />
                            <h4>Cựu sinh viên</h4>
                            <h2 className="counter">350</h2>
                        </div>
                        <div className="col-lg-3 col-sm-6 counter_item">
                            <i className="flaticon-heartbeat" />
                            <h4>Mức lương TB </h4>
                            <h2>
                                <span className="counter">14,567,452</span>K
                            </h2>
                        </div>
                        <div className="col-lg-3 col-sm-6 counter_item">
                            <i className="flaticon-money-1" />
                            <h4>Sinh viên có việc làm</h4>
                            <h2>
                                <span className="counter">94%</span>
                            </h2>
                        </div>

                        <div className="col-12">
                            <div className="wath_video">
                                <a
                                    className="popup-youtube"
                                    href="https://player.vimeo.com/video/142874198"
                                >
                                    <i className="flaticon-play-button" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* <Share></Share> */}
            </section>
        );
    }
}

export default Counter;
