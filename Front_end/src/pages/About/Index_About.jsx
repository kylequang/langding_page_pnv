import React, { Component } from "react";
import Slider from "./Slider";
import Milestones from "./Milestones";
import Found from "./Found";
import History from "./History";

import Leadership from "./Leadership";
import Partner from "./Partner";
import "./css/style_timeline.css";
import "./css/animate.css";

class Index_About extends Component {
  render() {
    return (
      <>
        <Slider></Slider>
        <History></History>
        <Found></Found>
        <Milestones></Milestones>
        <Partner></Partner>
        <Leadership></Leadership>
      </>
    );
  }
}

export default Index_About;
