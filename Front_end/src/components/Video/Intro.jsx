import React, { Component } from "react";

class Intro extends Component {
    render() {
        return (
            // autoPlay loop
            <video controls>
                <source
                    src="videos/PN Việt Nam - Học bổng CNTT .mp4"
                    type="video/mp4"
                />
            </video>
        );
    }
}
export default Intro;
