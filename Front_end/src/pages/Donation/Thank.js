import React, {Component} from 'react';
import {Container,Row, Col, Image} from 'react-bootstrap'
class Thank extends Component {
    render () {
        return (
            <Col md={3}>
                <section id="confirm">
                    <h2>Thank You!</h2>
                    <p>Your <span className="amount">$25</span> donation will help us reach <strong>570</strong>!</p>
                </section>
            </Col>
        )
    }

}
export default Thank;