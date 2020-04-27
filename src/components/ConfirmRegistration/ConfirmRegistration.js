import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TicketService from "../../service/TicketService";
import Preloader from "../Preloader/Preloader";

class ConfirmRegistration extends Component {
    state = {
        loading: false,
        error: false
    };

    ticketService = new TicketService();

    componentDidMount() {
        this.setState({
            loading: true,
            error: false,
        });

        this.ticketService.emailConfirm(this.props.hash)
            .then(() => {
                this.setState({
                    loading: false,
                    error: false,
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: true,
                })
            })
    }
    render() {
        if (this.state.loading) {
            return <Preloader />
        }

        if (this.state.error) {
            return (
                <div className={"main__popup"}>
                    <h2>Email not confirmed</h2>
                    <button><Link to={'/registration/'}>Go back</Link></button>
                </div>
            );
        }

        return (
            <div className={"main__popup"}>
                <h2>Your email is confirmed</h2>
                <button><Link to={'/login/'}>Go to login</Link></button>
            </div>
        );
    }
}

export default ConfirmRegistration;
