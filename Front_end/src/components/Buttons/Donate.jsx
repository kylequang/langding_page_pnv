import React, { Component } from "react";
import { Button } from "react-bootstrap";
class DonateButton extends Component {
  render() {
    return (
      <>
        <div className="clearfix">
          <button className="back" type="button">
            Back
            <span />
            <span />
            <span />
          </button>

          <Button className="next" variant="info">
            {this.props.title}
          </Button>
        </div>
      </>
    );
  }
}
export default DonateButton;
