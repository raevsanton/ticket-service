import React, {Component} from 'react';
import logo_color from '../../images/logo_color.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebookSquare, faInstagram, faOdnoklassniki} from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer>
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
            </footer>
        );
    }
}

export default Footer;