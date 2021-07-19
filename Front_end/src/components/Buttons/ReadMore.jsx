import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

class Readmore extends Component {
  render() {
    return (
      <Link to="/about">
        <button className="btn btn-outline-danger" href="#">
          Tìm hiểu thêm
        </button>
      </Link>
    );
  }
}

export default Readmore;
