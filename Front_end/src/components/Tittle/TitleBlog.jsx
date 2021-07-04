import React, { Component } from "react";

class Title extends Component {
    render() {
        return (
            <>
                <a>{this.props.title}</a>
            </>
        );
    }
}
export default Title;
