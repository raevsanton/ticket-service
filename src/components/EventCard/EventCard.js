import React, {Component} from 'react';

class EventCard extends Component {
    render() {
        let date = new Date(this.props.eventStart);
        let month = date.toLocaleString('en-US',{
            month: 'long'
        });
        let day = date.getDate();
        return (
            <div className="event__card">
                <div className="event__img">
                    <div className="event__title">
                        <h2>{this.props.artist}</h2>
                        <div className="event__line"/>
                        <h4>{this.props.eventName}</h4>
                    </div>
                    <div className="event__date">
                        <p>{day} {month}</p>
                    </div>
                    <img src={this.props.img} alt="poster" onError={(e)=>{e.target.onerror = null; e.target.src="/images/no-image.jpg"}}/>
                </div>
            </div>
        );
    }
}

export default EventCard;
