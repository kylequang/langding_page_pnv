import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
class Card extends Component {
    render () {
        return (  
            <>
                <Form className="clearfix">
                                <div className="input-group-1">
                                    <label>Card Number</label>
                                    <input type="text" />
                                </div>
                                <div className="clearfix">
                                    <div className="input-group-2">
                                    <label>Expiration Date</label>
                                    <input type="text" />
                                    </div>
                                    <div className="input-group-2">
                                    <label>Security Code (CVV)</label>
                                    <input type="text" />
                                    </div>
                                </div>
                                <hr />
                                <div className="input-group-1">
                                    <label>Employer</label>
                                    <input type="text" />
                                </div>
                                <div className="input-group-1">
                                    <label>Occupation</label>
                                    <input type="text" />
                                </div>
                            </Form>
            </>
        )
    }
}
export default Card;