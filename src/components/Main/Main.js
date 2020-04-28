import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import DayPicker from "../DatePicker/DatePicker";
import Footer from "../Footer/Footer";
import Events from "../Events/Events"
import logo_color from "../../images/logo_color.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram, faOdnoklassniki, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faRss} from "@fortawesome/free-solid-svg-icons";
import UpcomingEvents from "../UpcomingEvent/UpcomingEvent";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Login from "../Login/Login";
import HallsSchemes from "../HallsSchemes/HallsSchemes";
import About from "../About/About";
import EventDescription from "../EventDescription/EventDescription";
import Registration from "../Registration/Registration";
import Terms from "../Terms/Terms";
import Tickets from "../Tickets/Tickets";
import Paying from "../Paying/Paying";
import NotFound from "../NotFound/NotFound";
import RecoveryPassword from "../RecoveryPassword/RecoveryPassword";
import TicketService from "../../service/TicketService";
import Preloader from "../Preloader/Preloader";
import ConfirmRegistration from "../ConfirmRegistration/ConfirmRegistration";

export const MainContext = React.createContext();

class Main extends Component {
    ticketService = new TicketService();
    state = {
        eventsList: [],
        loading: true,
        loadingUpdateComponent: true,
        upcomingEventFirst: null,
        upcomingEventSecond: null,
        shoppingCartData: [],
        shoppingCartTickets:[]
    };

    componentDidMount() {
        this.selectDaysHandler();
        this.pasteUpcomingEvents()
    }

    pasteUpcomingEvents = async () => {
        let res = await this.ticketService.getOneItem();
        this.setState({
            upcomingEventFirst: res[0],
            upcomingEventSecond: res[1],
            loadingUpdateComponent: false
        })
    };

    selectDaysHandler = (from = 1, to = 100000000000000000) => {
        this.ticketService.getArray(from, to)
            .then(arr => {
                let tmpArr = arr.filter(item => {
                    return item.eventStatus != null
                });
                this.setState(() => {
                    return {
                        eventsList: tmpArr,
                        loading: false
                    }
                })
            })
    };

    addDataEventMethod = (event) => {
        this.setState({shoppingCartData: event})
    };

    //добавление билета в массив для отрисовки
    addTicketsInCart = (row, place, price, id) => {
        let newTickets = {row: row, place: place, id: id, price: price};
        if (this.state.shoppingCartTickets.length === 0) {
            let tmpSelectedTickets = [newTickets];
            localStorage.setItem('shoppingCartTicketsLocaleStorage', JSON.stringify(tmpSelectedTickets));
            this.setState({shoppingCartTickets: tmpSelectedTickets})
        } else {
            let tmpSelectedTickets = [...this.state.shoppingCartTickets, newTickets];
            localStorage.setItem('shoppingCartTicketsLocaleStorage', JSON.stringify(tmpSelectedTickets));
            this.setState({shoppingCartTickets: tmpSelectedTickets})
        }
    };

    deleteEventFromShoppingCart = (id) => {
        let {shoppingCartTickets} = this.state;
        let index = shoppingCartTickets.findIndex(item => item.id === id);
        let before = shoppingCartTickets.slice(0, index);
        let after = shoppingCartTickets.slice(index + 1);
        let newArray = [...before, ...after];
        localStorage.setItem('shoppingCartTicketsLocaleStorage', JSON.stringify(newArray))
        this.setState({shoppingCartTickets: newArray});
    };

    deleteAllTicketsFromArray = () => {
        this.setState({shoppingCartTickets: [], shoppingCartData: []})
        delete localStorage.shoppingCartTicketsLocaleStorage;
        delete localStorage.arrayDataLocaleStorage
    };

    render() {
        let {eventsList, loading, loadingUpdateComponent} = this.state;

        const EventResult = () => {
            let result = (eventsList.length !== 0) && !loading ?
                <Events arrayList={eventsList}/> :
                <h2 className={"textHaveNotEvent"}>There are not events in this date. Choose another date</h2>;
            return (
                <>
                    <div className="main__title">
                        <h1>Events</h1>
                    </div>
                    {this.state.loading ? <Preloader/> : result}
                </>
            )
        };
        const upcomingElement = (item) => {
            return (
                <UpcomingEvents item={item}/>
            )
        };
        let urlForFistLink = () => {
            return loadingUpdateComponent && this.state.upcomingEventFirst.eventId == null ? null : this.state.upcomingEventFirst.eventId
        };
        let urlForSecondLink = () => {
            return loadingUpdateComponent ? null : this.state.upcomingEventSecond.eventId
        };
        return (
            <MainContext.Provider value={
                {
                    dataOfEvent: [],
                    shoppingCartData: this.state.shoppingCartData,
                    shoppingCartTickets: this.state.shoppingCartTickets,
                    addDataEvent: this.addDataEventMethod,
                    addTicketsInCart: this.addTicketsInCart,
                    deleteEventFromShoppingCart: this.deleteEventFromShoppingCart,
                    deleteAllTicketsFromArray: this.deleteAllTicketsFromArray
                }
            }>
                <main>
                    <div className="container">
                        <div className="main__left">
                            <div className="main__calendar">
                                <h3>Calendar</h3>
                                <DayPicker selectDaysHandler={this.selectDaysHandler}/>

                            </div>
                            <div className="main__upcoming_events">
                                <h3>Upcoming Events</h3>
                                {this.state.loadingUpdateComponent ? <Preloader/> :
                                    <div className="main__list">
                                        <Link
                                            to={`/events/${urlForFistLink()}`}> {upcomingElement(this.state.upcomingEventFirst)}</Link>
                                        <Link
                                            to={`/events/${urlForSecondLink()}`}> {upcomingElement(this.state.upcomingEventSecond)}</Link>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="main__right">
                            <div>
                                <Route render={({location}) => (
                                    <TransitionGroup className="transition-group">
                                        <CSSTransition
                                            key={location.key}
                                            timeout={{enter: 100, exit: 100}}
                                            classNames="fade"
                                        >
                                            <section className="route-section">
                                                <Switch location={location}>
                                                    <Route path={'/'} component={EventResult} exact/>
                                                    <Route path={'/login/'} component={Login}/>
                                                    <Route path={'/shopping-cart/'} component={ShoppingCart}/>
                                                    <Route path={'/events/:id/tickets'}
                                                           render={({match}) => {
                                                               const {id} = match.params;
                                                               return <Tickets itemId={id}/>
                                                           }}/>/>
                                                    <Route path={'/events/:id/'}
                                                           render={({match}) => {
                                                               const {id} = match.params;
                                                               return <EventDescription path={'/events/'} itemId={id} deleteAllTickets={this.deleteAllTicketsFromArray}/>
                                                           }}/>
                                                    <Route path={'/events/'} component={EventResult} exact/>
                                                    <Route path={'/halls-schemes/'} component={HallsSchemes}/>
                                                    <Route path={'/about/'} component={About}/>
                                                    <Route path={'/registration/'} component={Registration}/>
                                                    <Route path={'/terms/'} component={Terms}/>
                                                    <Route path={'/paying/'} component={Paying}/>
                                                    <Route path={'/recovery-password/'} component={RecoveryPassword}/>
                                                    <Route path={'/user/:hash'}
                                                           render={({match}) => {
                                                               return (<ConfirmRegistration hash={match.params.hash}/>
                                                               );
                                                           }}/>
                                                    <Route component={NotFound}/>
                                                </Switch>
                                                <Footer/>
                                            </section>
                                        </CSSTransition>
                                    </TransitionGroup>
                                )}/>
                            </div>
                        </div>
                    </div>
                    <div className="main__footer">
                        <div className="footer__logo">
                            <Link to={"/"}>
                                <img src={logo_color} alt="logo"/>
                            </Link>
                            <div className="footer__address">
                                <p>Berlin City Hall</p>
                                <p>Freudstasse 69, 10117 Berlin</p>
                                <p>Tel.:  <a href="tel:+0302223344">030 2223344</a></p>
                            </div>
                        </div>
                        <div className="footer__contacts">
                            <p>Fax.: <a href="tel:+0302223355">030 2223355</a></p>
                            <p>Email: <a href="mailto:info@bch.de">info@bch.de</a></p>
                            <div className="header__icon">
                                <a href="/"><FontAwesomeIcon icon={ faYoutube } size="lg"/></a>
                                <a href="/"><FontAwesomeIcon icon={ faFacebookSquare } size="lg"/></a>
                                <a href="/"><FontAwesomeIcon icon={ faTwitter } size="lg"/></a>
                                <a href="/"><FontAwesomeIcon icon={ faInstagram } size="lg"/></a>
                                <a href="/"><FontAwesomeIcon icon={ faOdnoklassniki } size="lg"/></a>
                                <a href="/"><FontAwesomeIcon icon={ faRss } size="lg"/></a>
                            </div>
                        </div>
                    </div>
                </main>
            </MainContext.Provider>
        );
    }
}

export default withRouter(Main);
