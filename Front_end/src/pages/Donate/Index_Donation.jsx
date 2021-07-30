import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Donate.scss";
import Slide from "./Slide";
import Footer from "../../components/Footer/Footer";
import FPayment from "../../components/Form/FPayment";

class Index_Donation extends Component {
  render() {
    return (
      <>
        <Slide></Slide>
        <FPayment></FPayment>
        <Footer></Footer>
      </>
    );
  }
}
export default Index_Donation;
