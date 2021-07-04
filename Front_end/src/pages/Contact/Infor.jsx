import React, { Component } from "react";
import "../../App.css";

class DiaChi extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Địa Chỉ Chúng Tôi</h3>

                <ul className="contact">
                    <li>
                        <i
                            className="fa fa-map-marker"
                            style={{ fontSize: 25, color: "#d54d41" }}
                            aria-hidden="true"
                        />

                        <a href="#">
                            {" "}
                            99 Tô Hiến Thành, Phước Mỹ, Sơn Trà, Đà Nẵng 550000,
                            ViệtNam
                        </a>
                    </li>
                    <li>
                        <i
                            className="fa fa-phone"
                            aria-hidden="true"
                            style={{ fontSize: 25, color: "rgb(65 175 62)" }}
                        />

                        <a href="#"> +84 2363888503</a>
                    </li>
                    <li>
                        <i
                            className="fa fa-envelope"
                            aria-hidden="true"
                            style={{ fontSize: 25, color: "rgb(68 179 225)" }}
                        />
                        <a href="#"> contact@passerellesnumeriques.org</a>
                    </li>
                    <li>
                        <i
                            className="fa fa-globe"
                            aria-hidden="true"
                            style={{ fontSize: 25, color: "#df0022" }}
                        />
                        <a href="#">
                            {" "}
                            https://www.passerellesnumeriques.org/en/
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DiaChi;
