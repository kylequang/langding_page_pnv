import React, {Component} from 'react';
import {Container,Row, Col, Image, Form} from 'react-bootstrap'
class Donate extends Component {
    render () {
        return (
            <>
                <Row>
                    <div className="donate">
                            <h2>Donation</h2>
                            <p>You can donate one time or monthly.</p>
                            <div className="row">
                                <div className="col-md-6"><button>One time</button></div>
                                <div className="col-md-6"><button>Monthly</button></div>
                            </div>
                            <Form name="donAmount" id="donAmount">
                                <input type="radio" defaultValue={3} name="amount" id="three" />
                                <label htmlFor="three">$3</label>
                                <input type="radio" defaultValue={25} name="amount" id="twentyfive" />
                                <label htmlFor="twentyfive">$25</label>
                                <input type="radio" defaultValue={100} name="amount" id="hundred" />
                                <label htmlFor="hundred">$100</label>
                                <input type="radio" defaultValue="other" name="amount" id="other" />
                                <label htmlFor="other">Other</label>
                            </Form>
                    </div>
                </Row>
            </>
        )
    }

}
export default Donate;