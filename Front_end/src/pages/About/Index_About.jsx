import React, { Component } from "react";
import Slider from "./Slider";
import Milestones from "./Milestones";
import Foundation from "./Found";
import History from "./History";
import OurGallery from "./OurGallery";
import Department from "./Department";

class Index_About extends Component {
  render() {
    return (
      <>
        <Slider></Slider>
        <History></History>
        <Foundation></Foundation>
        <Milestones></Milestones>
        <OurGallery></OurGallery>
        <Department></Department>
      </>
    );
  }
}

export default Index_About;
