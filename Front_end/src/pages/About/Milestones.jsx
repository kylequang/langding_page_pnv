import React, { Component } from "react";

class Milestones extends Component {
  render() {
    return (
      <div className="container">
        <h3>Những cột mốc đáng nhớ</h3>
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1" />
          <div className="col-lg-10 col-md-10 col-sm-10">
            <section className="page-container">
              <nav className="global-sidebar" />
              <section className="page">
                <div className="row">
                  {/* NVE content div */}
                  <ul id="timeline" className="timeline">
                    <div className="arrowhead" />
                    <li className=" ">
                      <div className="timeline-badge">2021 </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title">
                            {" "}
                            PN đang có 458 sinh viên theo học, trong đó
                            <ul>
                              <li> PN Việt Nam: 131 sinh viên </li>
                              <li> PN CamPuC: 122 sinh viên </li>
                              <li>PN Philippin: 205 sinh viên </li>
                            </ul>
                          </h3>
                        </div>
                        <div className="timeline-body"></div>
                      </div>
                    </li>
                    <li className="timeline-inverted ">
                      <div className="timeline-badge">2010 </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title">
                            Thành lập Trung tâm PN Việt Nam tại thành phố Đà
                            Nẵng
                          </h3>
                        </div>
                        <div className="timeline-body"></div>
                      </div>
                    </li>
                    <li className=" ">
                      <div className="timeline-badge">2009 </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title">
                            Thành lập Trung tâm PN Philippin tại thành phố Cebu{" "}
                          </h3>
                        </div>
                        <div className="timeline-body"></div>
                      </div>
                    </li>
                    <li className="timeline-inverted ">
                      <div className="timeline-badge">2005 </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title">
                            Thành lập Trung tâm PN Campuchia tại thành phố
                            Ph-nôm-pênh
                          </h3>
                        </div>
                        <div className="timeline-body"></div>
                      </div>
                    </li>
                    <li className=" ">
                      <div className="timeline-badge">2005 </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title">
                            {" "}
                            Thành lập trụ sở chính của PN tại thành phố Paris
                            của nước PHÁP
                          </h3>
                        </div>
                        <div className="timeline-body"></div>
                      </div>
                    </li>
                    >
                    <div style={{ clear: "both" }} />
                    <li className=" last">
                      <div className="timeline-badge">1804 </div>
                      <div className="timeline-panel">
                        <img
                          data-pixel-width={640}
                          src="https://www.passerellesnumeriques.org/wp-content/uploads/2018/06/Joinus-PNP.jpg"
                          data-slimmage="true"
                          data-src="https://www.passerellesnumeriques.org/wp-content/uploads/2018/06/Joinus-PNP.jpg"
                          alt
                          style={{ maxWidth: "100%" }}
                        />
                        <div className="timeline-heading">
                          <h3 className="timeline-title">
                            PASSERELLESNUMERIQUES
                          </h3>
                        </div>
                        <div className="timeline-body"></div>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
                {/* NVE content div */}
              </section>
            </section>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1" />
        </div>
      </div>
    );
  }
}

export default Milestones;
