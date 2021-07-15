import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button} from 'react-bootstrap';
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
