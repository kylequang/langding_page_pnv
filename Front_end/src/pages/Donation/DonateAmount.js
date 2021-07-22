import React, { Component } from 'react';
import { Row, Form } from 'react-bootstrap';
import DonateButton from '../../components/Buttons/Donation';
class DonateAmount extends Component {
    render() {
        return (
            <>
                <Row>
                    <div id="custom">
                        <h2>Donation Amount</h2>
                        <Form name="customDonation" id="customDonation">
                            <div className="input-group-1">
                                <label htmlFor="custom-amount">$</label>
                                <input id="custom-amount" name="custom-amount" type="text" />
                                <div className="warn" />
                            </div>
                        </Form>
                        {/* <DonateButton title="Next" /> */}
                    </div>
                </Row>
            </>
        )
    }

}
export default DonateAmount;