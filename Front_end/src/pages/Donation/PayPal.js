import React, {Component} from 'react';
import {Form} from 'react-bootstrap'
class PayPal extends Component {
    render () {
        return (  
            <>
         
                <Form action="https://www.paypal.com/cgi-bin/webscr" method="post" className="clearfix">
                <input type="hidden" name="cmd" defaultValue="_xclick" />
                <input type="hidden" name="business" defaultValue="accounts@freelanceswitch.com" />
                
                <strong>How much do you want to donate?</strong><br />
                $ <input type="text" name="amount" />
                <input type="hidden" name="no_shipping" defaultValue={0} />
                <input type="hidden" name="no_note" defaultValue={1} />
                <input type="hidden" name="currency_code" defaultValue="USD" />
                <input type="hidden" name="lc" defaultValue="AU" />
                <input type="hidden" name="bn" defaultValue="PP-BuyNowBF" />
                <input type="hidden" name="return" defaultValue="https://net.tutsplus.com/payment-complete/" />
                <br /><br />
                <input type="submit" defaultValue="Pay with PayPal!" />
                </Form>
            </>
        )
    }
}
export default PayPal;