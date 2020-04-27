import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import TicketService from "../../service/TicketService";
import Preloader from "../Preloader/Preloader";

let ticketService = new TicketService();

class EventDescription extends Component {
    state = {
        item: null,
        loading: true,
        eventFinished: false,
        minPrices: null,
        maxPrices: null,
        availableTicket: null
    };

    componentDidMount = () => {
        let id = this.props.itemId;
        ticketService.getRestOfTickets(id)
            .then((e) => {
                this.setState({
                    minPrices: e.minPrice,
                    maxPrices: e.maxPrice,
                    availableTicket: e.restTick
                })
            })
            .catch((e) => {
                this.setState({
                    minPrices: 0,
                    maxPrices: 0,
                    availableTicket: "Not available"
                })
            });
        this.updateComponent();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updateComponent();
        }
    }

    updateComponent = () => {
        let id = this.props.itemId;
        ticketService.getItemById(id)
            .then((element) => {
                this.setState({item: element, loading: false})
            });
    };

    render() {
        let PrepareElement = () => {
            let date = new Date(this.state.item.eventStart);
            let month = date.toLocaleString('en-US', {
                month: 'long'
            });
            let day = date.getDate();
            let hour = date.getHours();
            let minutes = date.getMinutes() === 0 ? `${date.getMinutes()}0` : `${date.getMinutes()}`;
            let year = date.getFullYear();
            return (
                <div className={'containerEvent'}>
                    <div className={'main__title'}>
                        <h1>{this.state.item.artist}</h1>
                    </div>
                    <div className={'box'}>
                        <div className={'poster'}>
                            <div className="description__img">
                            <img  src={this.state.item.images[0]} alt="poster" onError={(e)=>{e.target.onerror = null; e.target.src="/images/no-image2.jpg"}}/>
                        </div>
                        </div>
                        <div className={'info'}>
                            <p className={'aboutEvent'}>{this.state.item.description}</p>
                            <h3 className={'time'}>Date: <span className={'eventDate'}>{day} {month} {year}</span>
                                <span className={'eventTime'}><FontAwesomeIcon icon={faClock}/> {hour}:{minutes}</span></h3>
                            <h3 className={'available'}>Tickets available -
                                <span className={'ticketsAvailable'}> {this.state.availableTicket}</span></h3>
                            <h3 className={'priceRange'}>Price range:
                                <span className={'eventPrices'}> €{Math.floor(this.state.minPrices)} - €{Math.floor(this.state.maxPrices)}</span>
                            </h3>
                            <Link to={`${this.props.path}${this.props.itemId}/tickets/`} className='buyBtn' item={this.state.item}>
                                <button style={{backgroundColor: "#ffc800"}} onClick={this.props.deleteAllTickets}>Buy tickets</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        };

        let StartDescription = () => {
            return (
                this.state.loading ? <Preloader/> : <PrepareElement />
            )
        };

        return (
            <StartDescription />
        );
    }
}

export default EventDescription;
