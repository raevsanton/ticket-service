import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {MainContext} from "../Main/Main";

class CountPlaces extends Component {
    render() {
        let {arrayTicket} = this.props;
        let row = arrayTicket === undefined ? null : arrayTicket.row;
        let place = arrayTicket === undefined ? null : arrayTicket.place;
        return (
            <MainContext.Consumer>{
                value => (
                <>
                    <div className="main__place">
                        <div className="main__wrp">
                            <span>{row}</span>
                            <span>{place}</span>
                            <div className="main__close" onClick={() => {
                                this.props.delete(arrayTicket.id)
                            }}>
                                <FontAwesomeIcon icon={faTimes} size="lg"/></div>
                        </div>
                        <div className="main__line"/>
                        <div className="main__total"/>
                    </div>
                </>
                )}</MainContext.Consumer>
        );
    }
}

export default CountPlaces;
