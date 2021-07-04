import React, { Component } from "react";
import Slider from "./Slider";
import Milestones from "./Milestones";
import Found from "./Found";
import History from "./History";
import OurGallery from "./OurGallery";
import Leadership from "./Leadership";
import "./css/style_timeline.css";
import "./css/animate.css";

class Index_About extends Component {
    render() {
        return (
            <div>
                <Slider></Slider>

                <History></History>

                <Found></Found>

                <Milestones></Milestones>

                <OurGallery></OurGallery>

                <Leadership></Leadership>
            </div>
        );
    }
}

export default Index_About;
