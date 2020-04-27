import React, {Component} from 'react';
import logo from '../../images/logo_white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebookSquare, faInstagram, faOdnoklassniki} from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        const { showMenu } = this.props;
        return (
            <header>
                <div className="container">
                    <div className="header__gradient">
                        <Link to="/"><img className="header__logo" src={logo} alt="logo"/></Link>
                        <div className="header__gradient--back" />
                    </div>
                    <div className="header__wrapper">
                        <div className="header__main">
                            <div className="header__main--left">
                                <div className="header__title">
                                    <p>Berlin City Hall | Events and Tickets</p>
                                </div>
                                <div className="header__links">
                                    <Link to="/login">Login</Link>
                                </div>
                            </div>
                            <div className="header__main--right">
                                <div className="header__icon">
                                    <a href="/"><FontAwesomeIcon icon={ faYoutube } size="lg"/></a>
                                    <a href="/"><FontAwesomeIcon icon={ faFacebookSquare } size="lg"/></a>
                                    <a href="/"><FontAwesomeIcon icon={ faTwitter } size="lg"/></a>
                                    <a href="/"><FontAwesomeIcon icon={ faInstagram } size="lg"/></a>
                                    <a href="/"><FontAwesomeIcon icon={ faOdnoklassniki } size="lg"/></a>
                                    <a href="/"><FontAwesomeIcon icon={ faRss } size="lg"/></a>
                                </div>
                                <nav className="header__menu" onClick={ showMenu }>
                                    <div className="header__burger"/>
                                    <div className="header__burger"/>
                                    <div className="header__burger"/>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;