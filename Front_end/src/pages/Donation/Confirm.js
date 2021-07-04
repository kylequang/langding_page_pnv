import React, {Component} from 'react';
import { Col} from 'react-bootstrap'
class Confirm extends Component {
    render () {
        return (
            <Col md={4}>
                <section id="check">
                    <h2>Confirm Payment</h2>
                    <p>Please confirm your contribution of</p>
                    <span>$8888</span>
                    <button className="next" type="button">Confirm</button>
                </section>
            </Col>
        )
    }

}
export default Confirm;