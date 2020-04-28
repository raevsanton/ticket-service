import React, {Component} from 'react';
import CountPlaces from "../CountPlaces/CountPlaces";
import {Link} from "react-router-dom";
import {MainContext} from "../Main/Main";

class ShoppingCart extends Component {

    state = {
        checkbox: false,
        showEmptyCart: false,
        amount: null,
        refresh: false
    };

    deleteEventFormLocalStorage = (id) => {
        let array = JSON.parse(localStorage.getItem('shoppingCartTicketsLocaleStorage'));
        let index = array.findIndex(item => item.id === id);
        let before = array.slice(0, index);
        let after = array.slice(index + 1)
        let newArray = [...before, ...after];
        localStorage.setItem('shoppingCartTicketsLocaleStorage', JSON.stringify(newArray))
        this.setState({refresh: !this.state.refresh})
    };


    getSumOfTickets = (array) => {
        return Math.floor(array.reduce((sum, item) => {
            return sum + item.price
        }, 0))
    };

    countPlaces = (array, deleteMethod) => {
        localStorage.setItem('arrayOfTickets', array);
        localStorage.setItem('sumOfTickets', this.getSumOfTickets(array));
        return array.map((item) => {
            return <>
                <CountPlaces arrayTicket={item} delete={deleteMethod}/>
            </>
        });
    };

    checkEmptyCart = (array, names, deleteItem, deleteAllTickets) => {
        let arrayLocal = JSON.parse(localStorage.getItem('shoppingCartTicketsLocaleStorage'));
        names = JSON.parse(localStorage.getItem('arrayDataLocaleStorage'));
        if ((array.length === 0 || this.state.showEmptyCart) && (arrayLocal === null || Object.keys(arrayLocal).length === 0)) {
            return (
                <div className={"main__popup"}>
                    <h2 className={'text_Logged'}>Your shopping cart is empty</h2>
                    <button onClick={() => {
                        return <Link to={`${window.history.back()}`}/>
                    }}>Return back
                    </button>
                </div>
            )
        } else if (array.length === 0 && Object.keys(arrayLocal).length !== 0) {
            array = arrayLocal;
            return (
                <div className="main__shopping">
                    {localStorage.getItem('isLogged') === "true" ?
                        <div className="main__shopping">
                            <div className="main__title">
                                <h1>Shopping cart</h1>
                            </div>
                            <div className="main__cart">
                                <h3 className="main__information_name"> {names.artist}
                                    | {names.eventName}
                                    | {new Date(names.eventStart).getDate()
                                    + " " + new Date(names.eventStart).toLocaleString('en-US', {month: 'long'})
                                    + " " + new Date(names.eventStart).getFullYear()}</h3>
                                <h4 className="main__delete" onClick={() => {
                                    deleteAllTickets();
                                    this.setState({showEmptyCart: true})
                                }}>Clear cart</h4>
                                <div className="main__location">
                                    <p>Row</p>
                                    <p>Place</p>
                                    <div/>
                                </div>
                                <>{this.countPlaces(array, this.deleteEventFormLocalStorage)}</>
                                <div className="main__total">
                                    <h3 className="main__count">{array.length} tickets</h3>
                                    <h3>€ {this.getSumOfTickets(array)}</h3>
                                </div>
                                <div className="main__cart--wrp">
                                    <Link to="/paying">
                                        {this.state.checkbox ? <button>Pay</button> : <button disabled>Pay</button>}
                                    </Link>
                                    <div className="main__form--wrp">
                                        <input required type="checkbox" id="terms" name="terms"
                                               onClick={() => this.setState({checkbox: !this.state.checkbox})}/>
                                        <label htmlFor="terms">
                                            <div>* I have read the <Link to={"/terms"} className={"textForFix"}> Terms and Conditions</Link> and fully agree with them.</div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="main__popup">
                            <h2 className="text_logged">Available only for users. Please, login or register</h2>
                            <button className={"link__btn"}><Link to='/registration'> Registration </Link></button>
                            <button className={"link__btn"}><Link to='/login'> Login </Link></button>
                        </div>
                    }
                </div>
            )
        } else
            return (
                <div className="main__shopping">
                    {localStorage.getItem('isLogged') === "true" ?
                        <div className="main__shopping">
                            <div className="main__title">
                                <h1>Shopping cart</h1>
                            </div>
                            <div className="main__cart">
                                <h3 className="main__information_name"> {names.artist}
                                    | {names.eventName}
                                    | {new Date(names.eventStart).getDate()
                                    + " " + new Date(names.eventStart).toLocaleString('en-US', {month: 'long'})
                                    + " " + new Date(names.eventStart).getFullYear()}</h3>
                                <h4 className="main__delete" onClick={() => {
                                    deleteAllTickets();
                                    this.setState({showEmptyCart: true})
                                }}>Clear cart</h4>
                                <div className="main__location">
                                    <p>Row</p>
                                    <p>Place</p>
                                    <div/>
                                </div>
                                <>{this.countPlaces(array, deleteItem)}</>
                                <div className="main__total">
                                    <h3 className="main__count">{array.length} tickets</h3>
                                    <h3>€ {this.getSumOfTickets(array)}</h3>
                                </div>
                                <div className="main__cart--wrp">
                                    <Link to="/paying">
                                        {this.state.checkbox ?
                                            <button onClick={() => {
                                                delete localStorage.shoppingCartTicketsLocaleStorage;
                                                delete localStorage.arrayDataLocaleStorage
                                                localStorage.setItem('shoppingCartTicketsLocaleStorage', JSON.stringify(array))
                                                localStorage.setItem('arrayDataLocaleStorage', JSON.stringify(names))
                                            }
                                            }>Pay</button> :
                                            <button disabled>Pay</button>}
                                    </Link>
                                    <div className="main__form--wrp">
                                        <input required type="checkbox" id="terms" name="terms"
                                               onClick={() => this.setState({checkbox: !this.state.checkbox})}/>
                                        <label htmlFor="terms">
                                            <div>* I have read the <Link to={"/terms"} className={"textForFix"}> Terms and Conditions</Link> and fully agree with them.</div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="main__popup">
                            <h2 className="text_logged">Available only for users. Please, login or register</h2>
                            <button className={"link__btn"}><Link to='/registration'> Registration </Link></button>
                            <button className={"link__btn"}><Link to='/login'> Login </Link></button>
                        </div>
                    }
                </div>
            )
    };

    render() {
        return (
            <MainContext.Consumer>{
                value => (
                    this.checkEmptyCart(value.shoppingCartTickets, value.shoppingCartData, value.deleteEventFromShoppingCart, value.deleteAllTicketsFromArray)
                )
            }
            </MainContext.Consumer>
        );
    }
}

export default ShoppingCart;
