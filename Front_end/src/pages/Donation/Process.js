import React, {Component} from 'react';
import {Container,Row, Col, Image} from 'react-bootstrap'
class Processing extends Component {
    render () {
        return (
            <Col md={3}>
                            <section className="processing">
                                <div className="check">
                                    <span />
                                    <div className="mask">
                                    </div>
                                    <span />
                                </div>
                                <div className="outer">
                                    <div className="inner">
                                    </div>
                                    <div className="progress">
                                    </div>
                                </div>
                                <span className="message">Processing</span>
                            </section>
            </Col>
        )
    }

}
export default Processing;