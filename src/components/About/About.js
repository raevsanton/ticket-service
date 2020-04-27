import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className='about__page'>
                <div className='about__info'>
                    <div className={'main__title'}>
                        <h1>About Us</h1>
                    </div>
                    <div className={'about__banner'}><img src={'/images/about-us.jpg'} alt={'Festival'}/></div>
                    <p className={'about__text'}>At <strong>Berlin City Hall | Events and Tickets</strong>, we strive to put fans first. Every day we're listening to your feedback and working to improve your experience before, during, and after events.
                       </p>
                    <br/>
                    <p className={'about__text'}> <strong>Berlin City Hall | Events and Tickets</strong> merged to create Berlin Entertainment.
                    Now you have more options than ever to enjoy live events, and things are only getting better.
                        We're making real changes and putting you first in everything we do. Here's just a taste of what we're up to...</p>
                </div>
            </div>
        );
    }
}

export default About;