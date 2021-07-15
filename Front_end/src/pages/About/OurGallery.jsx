import React, { Component } from "react";
class OurGallery extends Component {
  render() {
    return (
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <div id="fh5co-portfolio">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center heading-section ">
                  <h3>Our Gallery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit est facilis maiores, perspiciatis accusamus asperiores
                    sint consequuntur debitis.
                  </p>
                </div>
              </div>
              <div className="row row-bottom-padded-md">
                <div className="col-md-12">
                  <ul id="fh5co-portfolio-list">
                    <li
                      className="two-third animate-box"
                      style={{ backgroundImage: "url(images/cover_bg_1.jpg)" }}
                    >
                      <a className="color-3">
                        <div className="case-studies-summary">
                          <span>Give Love</span>
                          <h2>Donation is caring</h2>
                        </div>
                      </a>
                    </li>
                    <li
                      className="one-third animate-box"
                      style={{ backgroundImage: "url(images/cover_bg_3.jpg)" }}
                    >
                      <a className="color-4">
                        <div className="case-studies-summary">
                          <span>Give Love</span>
                          <h2>Donation is caring</h2>
                        </div>
                      </a>
                    </li>
                    <li
                      className="one-third animate-box"
                      style={{ backgroundImage: "url(images/cover_bg_1.jpg)" }}
                    >
                      <a className="color-5">
                        <div className="case-studies-summary">
                          <span>Give Love</span>
                          <h2>Donation is caring</h2>
                        </div>
                      </a>
                    </li>
                    <li
                      className="two-third animate-box"
                      style={{ backgroundImage: "url(images/cover_bg_3.jpg)" }}
                    >
                      <a className="color-6">
                        <div className="case-studies-summary">
                          <span>Give Love</span>
                          <h2>Donation is caring</h2>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-md-offset-4 text-center ">
                  <a className="btn btn-primary btn-lg">See Gallery</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurGallery;
