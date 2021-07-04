import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center">
                                <p className="fh5co-social-icons">
                                    <a href="#"><i className="icon-twitter2"></i></a>
                                    <a href="#"><i className="icon-facebook2"></i></a>
                                    <a href="#"><i className="icon-instagram"></i></a>
                                    <a href="#"><i className="icon-dribbble2"></i></a>
                                    <a href="#"><i className="icon-youtube"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
               
              <button className="scroll-top"><i className="fas fa-angle-double-up"></i></button>
            </div>
        );
    }

}
export default Footer;