import React, { Component } from "react";
import Found from "../About/Found";
import NeedHelp from "../About/NeedHelp";
import Value from "../About/Value";
import Intro from "../../components/Video/Intro";
import Counter from "../About/Counter";
import Partner from "../../pages/About/Partner";
import Activity from "../Activity/Activity";
import Staff from "../About/Staff";
import Head from "../../components/Video/Head";
class Index_HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      loading: true,
    });
  };
  render() {
    return (
      <>
        <Head></Head>
        <Found></Found>
        <Value></Value>
        <Counter></Counter>
        <NeedHelp></NeedHelp>
        <Partner></Partner>
        <Intro></Intro>
        <Activity></Activity>
        <Staff></Staff>
      </>
    );
  }
}

export default Index_HomePage;
