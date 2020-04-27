import React, {Component} from 'react';
import logo from '../../images/logo_white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebookSquare, faInstagram, faOdnoklassniki} from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

class Menu extends Component {
    render() {
        const { isMenuOpen, showMenu } = this.props;
        return (
            <nav id="menu" className={isMenuOpen ? "show" : null}>
                <div className="container">
                    <div className="menu__logo_wrapper"><Link to="/"><img src={logo} alt="logo"/></Link></div>
                    <div className="menu__address">
                        <div className="header__title">
                            <p>Berlin City Hall | Events and Tickets</p>
                        </div>
                        <div className="menu__icon">
                            <a href="/"><FontAwesomeIcon icon={ faYoutube } size="lg"/></a>
                            <a href="/"><FontAwesomeIcon icon={ faFacebookSquare } size="lg"/></a>
                            <a href="/"><FontAwesomeIcon icon={ faTwitter } size="lg"/></a>
                            <a href="/"><FontAwesomeIcon icon={ faInstagram } size="lg"/></a>
                            <a href="/"><FontAwesomeIcon icon={ faOdnoklassniki } size="lg"/></a>
                            <a href="/"><FontAwesomeIcon icon={ faRss } size="lg"/></a>
                        </div>
                        <div className="menu__address">
                            <p>Berlin City Hall</p>
                            <p>Freudstasse 69, 10117 Berlin</p>
                            <p>Tel.: <a href="tel:+0302223344">030 2223344</a></p>
                            <p>Fax.: <a href="tel:+0302223355">030 2223355</a></p>
                            <p>Email: <a href="mailto:info@bch.de">info@bch.de</a></p>
                        </div>
                    </div>
                    <ul className="menu__list">
                        <li><Link to="/login" onClick={showMenu}>Login/Out</Link></li>
                        <li><Link to="/events" onClick={showMenu}>Events</Link></li>
                        <li><Link to="/shopping-cart" onClick={showMenu}>Shopping cart</Link></li>
                        <li><Link to="/halls-schemes" onClick={showMenu}>Halls Scheme</Link></li>
                        <li><Link to="/about" onClick={showMenu}>About Us</Link></li>
                    </ul>
                    <div className="menu__close" onClick={ showMenu }/>
                </div>
            </nav>
        );
    }
}

export default Menu;