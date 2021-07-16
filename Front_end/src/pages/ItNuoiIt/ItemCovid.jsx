import React, { Component } from "react";

class ItemCovid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>{this.props.children}</h2>;
  }
}

export default ItemCovid;
