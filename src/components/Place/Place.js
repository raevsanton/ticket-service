import React, {Component} from 'react';
import {MainContext} from "../Main/Main";

class Place extends Component {
    state = {
        condition: false,
    };

    render() {
        let {row, place, price, seat} = this.props;
        let id = row + seat;
        return (
            <MainContext.Consumer>{
                value => (
                <span
                    onClick={() => (
                            this.setState(() => {
                                if(this.state.condition){
                                    value.deleteEventFromShoppingCart(id)
                                }
                                else{
                                    value.addTicketsInCart(row, seat, price, id)
                                }
                                return {
                                    condition: !this.state.condition
                                }
                            })
                    )}
                    className={this.state.condition ? "hall-place-checked" : "hall-place"}
                >
                {place}
            </span>
                )}
            </MainContext.Consumer>
        );
    }
}

export default Place;
