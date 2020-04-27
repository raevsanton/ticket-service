import React, {Component} from 'react';
import EventCard from "../EventCard/EventCard";
import {Link} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

class Events extends Component {
    eventsList = this.props.arrayList;
    state = {
        eventOnPage: [],
        loading: true,
        start: 0,
        end: 4,
        eventsType: 1
    };

    newNextPage = () => {
        if (this.state.end <= this.eventsList.length) {
            this.setState(() => {
                let tmpStart = this.state.start + 4;
                let tmpEnd = this.state.end + 4;
                let tmpNextList = this.eventsList.slice(tmpStart, tmpEnd);
                return {
                    start: tmpStart,
                    end: tmpEnd,
                    eventOnPage: tmpNextList
                }
            })
        }
    };

    newPrevPage = () => {
        if (this.state.start > 0) {
            this.setState(() => {
                let tmpStart = this.state.start - 4;
                let tmpEnd = this.state.end - 4;
                let tmpNextList = this.eventsList.slice(tmpStart, tmpEnd);
                return {
                    start: tmpStart,
                    end: tmpEnd,
                    eventOnPage: tmpNextList
                }
            })
        }
    };

    componentDidMount() {
        let { arrayList } = this.props;
        let resTmp = arrayList.slice(0, 4);
        this.setState(() => {
            return {
                eventOnPage: resTmp,
                loading: false,
            }
        })
    }

    createElements = () => {
        return this.state.eventOnPage.map((item) => {
            return (
                    <Link key={item.eventId} to={{
                        pathname:`/events/${item.eventId}`,
                        myProps: {
                            id: item.eventId
                        }
                    }}>
                        <EventCard
                            key={item.eventId}
                            eventStart={item.eventStart}
                            artist={item.artist}
                            eventName={item.eventName}
                            img={item.images[0]}
                        />
                    </Link>
            )
        });
    };

    render() {
        let loading = this.state.loading ? <Preloader /> : null;
        let eventsArray = !this.state.loading ? this.createElements() : null;
        let prevButton = this.state.start !== 0 && !this.state.loading ?
            <button className="main__events_btn--prev" onClick={this.newPrevPage}>Prev</button> : null;
        let nextButton = this.state.end < this.eventsList.length && !this.state.loading ?
            <button className="main__events_btn--next" onClick={this.newNextPage}>Next</button> : null;
        return (

            <div className="main__events">
                <div className="main__events__list">
                    {loading}
                    {eventsArray}
                </div>
                <div className="main__events_btn">
                    {prevButton}{nextButton}
                </div>
            </div>
        );
    }
}

export default Events;
