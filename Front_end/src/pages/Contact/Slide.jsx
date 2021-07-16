import React, { Component } from "react";
import "../../App.css";

class Slide extends Component {
    render() {
        return (
            <div class="full_noidung">
                <div id="noidung">
                    <marquee style={{ color: "black" }}>
                        {" "}
                        <h1>
                            <b>LIÊN HỆ VỚI CHÚNG TÔI</b>
                        </h1>
                    </marquee>
                </div>
            </div>
        );
    }
}

export default Slide;
