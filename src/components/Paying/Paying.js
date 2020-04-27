import React, {Component} from 'react';
import {PayPalButton} from "react-paypal-button-v2";
import Success from "../Success/Success";

class Paying extends Component {
    state = {
        showCart: true,
        paidSuccess: false
    };

    createOrder = (data, action) => {
        return action.order.create({
            purchase_units: [
                {
                    description: 'Ticket order',
                    amount: {
                        value: localStorage.getItem('sumOfTickets')
                    }
                }
            ]
        });
    };

    onApprove = (data, action) => {
        action.order.capture().then(details => {
            this.setState({...this.state, showCart: false, paidSuccess: true});
        });
    };

    onSuccess = () => {
        this.setState({paidSuccess: true});
        localStorage.removeItem('sumOfTickets');
        localStorage.removeItem('shoppingCartTicketsLocaleStorage');
        localStorage.removeItem('arrayDataLocaleStorage');
    };

    getSumOfTickets = (array) => {
        return Math.floor(array.reduce((sum, item, total) => {
            total = sum + item.price;
            return total;
        }, 0))
    };

    render() {
        let arrayLocal = JSON.parse(localStorage.getItem('shoppingCartTicketsLocaleStorage'));
        let dataLocal = JSON.parse(localStorage.getItem('arrayDataLocaleStorage'));
        return (
            !this.state.paidSuccess ?
                <div className="main__paying">
                    <div className="main__title">
                        <h1>Paying</h1>
                    </div>
                    <div className="main__cart">
                        <h3 className="main__information_name"> {dataLocal.artist}
                            | {dataLocal.eventName}
                            | {new Date(dataLocal.eventStart).getDate()
                            + " " + new Date(dataLocal.eventStart).toLocaleString('en-US', {month: 'long'})
                            + " " + new Date(dataLocal.eventStart).getFullYear()}</h3>
                        <div className="main__paypal">
                            <div className="main__total">
                                <h3 className="main__count">{Object.keys(arrayLocal).length} tickets</h3>
                                <h3>€ {this.getSumOfTickets(arrayLocal)}</h3>
                            </div>
                            <PayPalButton
                                createOrder={this.createOrder}
                                onApprove={this.onApprove}
                                locale='en_US'
                                style={{
                                    size: 'small',
                                    color: 'silver',
                                    shape: 'rect',
                                    label: 'pay'
                                }}
                                options={{
                                    clientId: "AZsdm_Gq1GuMCGwR2FkL2D-i0uIl4pKjnKuO8kkcOCkA71MxICDprmJ7LLLtOtqfEgPZNbSKDYxmSzX9"
                                }}
                                onSuccess={this.onSuccess}
                            />
                        </div>
                    </div>
                </div> : <Success/>
        );
    }
}

export default Paying;
