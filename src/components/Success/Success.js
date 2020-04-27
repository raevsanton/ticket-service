import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {MainContext} from "../Main/Main";
import {TicketPDF} from "../TicketPDF/TicketPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

class Success extends Component {
    getSumOfTickets = (array) => {
        return array.reduce((sum, item, total) => {
            total = sum + item.price;
            return total;
        }, 0)
    };
    render() {
        return (
            <MainContext.Consumer>{
                value => (
            <div className="main__success">
                <div className="main__title">
                    <h1>Success</h1>
                </div>
                <h3 className="main__information_name"> {value.shoppingCartData.artist}
                    | {value.shoppingCartData.eventName}
                    | {new Date(value.shoppingCartData.eventStart).getDate()
                    + " " + new Date(value.shoppingCartData.eventStart).toLocaleString('en-US', {month: 'long'})
                    + " " + new Date(value.shoppingCartData.eventStart).getFullYear()}</h3>
                <div className="main__total">
                    <h3 className="main__count">{value.shoppingCartTickets.length} tickets</h3>
                    <h3>€ {Math.floor(this.getSumOfTickets(value.shoppingCartTickets))}</h3>
                </div>
                <p className="main__text--blue">Congratulations! You’ve successfully payed. We wish you a pleasant time at our Berlin City Hall</p>
                <div className="main__download_ticket">
                    <PDFDownloadLink
                        id={'pdfLink'}
                        document={<TicketPDF
                            data={value.shoppingCartTickets}
                            title={value.shoppingCartData.eventName}
                            artist={value.shoppingCartData.artist}
                            date={new Date(value.shoppingCartData.eventStart).getDate()
                                    + " " + new Date(value.shoppingCartData.eventStart).toLocaleString('en-US', {month: 'long'})
                                    + " " + new Date(value.shoppingCartData.eventStart).getFullYear()}
                        />}
                        fileName={`tickets.pdf`}
                        style={{
                            fontFamily:" DINPro-Black,sans-serif",
                            fontSize: "20px",
                            color: "white",
                            padding: "5px 60px",
                            backgroundColor: "#ffc800",
                            cursor: "pointer",
                            transition: "all .4s ease",
                            border: "none",
                            outline: "none",
                        }}
                    >
                        Download PDF
                    </PDFDownloadLink>
                </div>
                <button><Link to={"/"}> Return to main </Link></button>
            </div>
            )}
            </MainContext.Consumer>
        );
    }
}

export default Success;
