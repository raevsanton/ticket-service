import React, {Component} from 'react';
import TicketService from "../../service/TicketService";
import {Link} from "react-router-dom";
import {MainContext} from "../Main/Main";

let ticketService = new TicketService();

class UpcomingEvent extends Component {
    state = {
        availableTickets: null
    };
    componentDidMount = () => {
        let id = this.props.item.eventId;
        ticketService.getRestOfTickets(id)
            .then((e) => {
                this.setState({
                    availableTickets: e.restTick
                })
            })
    };

    render() {
        let date = new Date(this.props.item.eventStart);
        let month = date.toLocaleString('en-US', {
            month: 'long'
        });
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes() === 0 ? `${date.getMinutes()}0` : `${date.getMinutes()}`;
        let showBuyTickets = (deleteArray) => {
            return (
                this.state.availableTickets === 0 ?
                    <div className="main__check">
                        <p>Sold out</p>
                    </div> :
                    <Link to={`/events/${this.props.item.eventId}/tickets/`} item={this.state.item} onClick={deleteArray}>
                        <div className="main__check--green">
                            <p>Buy</p>
                        </div>
                    </Link>
            )
        };
        return (
            <MainContext.Consumer>{
                value => (
                    <div className="main__item">
                        <div className="main__img">
                            <h3>{this.props.item.artist}</h3>
                            <img src={this.props.item.images[0]} alt="cover"/>
                        </div>
                        <div className="main__description">
                            <div className="main__date">
                                <p>{day} {month}</p>
                            </div>
                            <div className="main__time">
                                <p>{hour}:{minutes}</p>
                            </div>
                            {showBuyTickets(value.deleteAllTicketsFromArray)}
                        </div>
                    </div>
                )
            }
            </MainContext.Consumer>
        )
    }
}

export default UpcomingEvent;
