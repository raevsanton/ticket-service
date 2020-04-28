import React, {Component} from 'react';
import CountPlaces from "../CountPlaces/CountPlaces";
import GrosseSaal from "../Halls/GrosseSaal";
import {Link} from "react-router-dom";
import TicketService from "../../service/TicketService";
import KleinerSaal from "../Halls/KleinerSaal";
import {MainContext} from "../Main/Main";
import Preloader from "../Preloader/Preloader";

let ticketService = new TicketService();

class Tickets extends Component {

    state = {
        item: null,
        event: [],
        loading: true,
        priceList: []
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updateComponent();
        }
    }

    componentDidMount() {
        ticketService.getItemById(this.props.itemId)
            .then(arr => {
                let priceListTmp = arr.priceRanges.map((detail) => {
                    return <>
                        <h3 className="main__cost" style={{background: detail.color}}>
                            € {Math.floor(detail.price)}
                        </h3>
                    </>
                });
                this.setState({event: arr, priceList: priceListTmp, loading: false})
            });
    }

    countPlaces = (array, deleteMethod) => {
        return array.map((item) => {
            return <>
                <CountPlaces arrayTicket={item} delete={deleteMethod}/>
            </>
        });
    };

    getSumOfTickets = (array) => {
        return Math.floor(array.reduce((sum, item) => {
            return sum + item.price
        }, 0))
    };

    updateComponent = () => {
        let id = this.props.itemId;
        ticketService.getItemById(id)
            .then((element) => {
                this.setState({event: element, loading: false})
            });
    };

    render() {
        let {loading, event} = this.state;
        let date = loading ? null : new Date(this.state.event.eventStart);
        let day = loading ? null : date.getDate();
        let year = loading ? null : date.getFullYear();
        let month = loading ? null : date.toLocaleString('en-US', {
            month: 'long'
        });
        let {eventName, artist} = loading ? '' : event;
        let hall = !loading && event.hall === 0 ? <GrosseSaal price={event}/> :
            <KleinerSaal price={event}/>;
        let priceRange = loading ? null : this.state.priceList;
        let mainName = loading ? null : `${artist} | ${eventName} | ${day} ${month} ${year}`;
        localStorage.setItem('arrayDataLocaleStorage', JSON.stringify(event));
            return (
                <MainContext.Consumer>{
                    value => (
                            <div className="main__tickets">
                                <div className="main__title">
                                    <h1>Tickets</h1>
                                </div>
                                <h3 className="main__information_name">{mainName}</h3>
                                {loading ? <Preloader/> :
                                <div className="main__ticket--wrp">
                                    {hall}
                                    <div className="main__wrp_ticket">
                                        <div className="main__price_range">
                                            <h3>Price range:</h3>
                                            {priceRange}
                                        </div>
                                        <div className="main__location">
                                            <p>Row</p>
                                            <p>Place</p>
                                            <div/>
                                        </div>
                                        {this.countPlaces(value.shoppingCartTickets, value.deleteEventFromShoppingCart)}
                                        <div className="main__total">
                                            <h3 className="main__count">{value.shoppingCartTickets.length} tickets</h3>
                                            <h3>€ {this.getSumOfTickets(value.shoppingCartTickets)}</h3>
                                        </div>
                                        <Link to={'/shopping-cart'}>
                                            {value.shoppingCartTickets.length === 0
                                                ?
                                               <button disabled>To the cart</button>
                                                :
                                                <button onClick={() => {
                                                    value.addDataEvent(event);
                                                    localStorage.setItem('arrayDataLocaleStorage', JSON.stringify(event))
                                                }}>To the cart
                                                </button>
                                            }
                                        </Link>
                                    </div>
                                </div>}
                            </div>
                )}
            </MainContext.Consumer>
        );
    }
}

export default Tickets;

