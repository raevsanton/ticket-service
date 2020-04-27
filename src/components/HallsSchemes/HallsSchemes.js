import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

class HallsSchemes extends Component {
    state = {
      loading: true
    };

    render() {
        return (
            <div className="main__schemes">
                <div className="main__title">
                    <h1>Halls schemes</h1>
                </div>
                <div className="main__schemes--wrp">
                        <Carousel
                            showStatus={false}
                            infiniteLoop={true}
                            showThumbs={false}
                            showIndicators={false}
                            swipeScrollTolerance={2}
                        >
                            <div>
                                <img src={'/images/grosseSaal.jpg'} alt={"GrosseSaal"}/>
                            </div>
                            <div>
                                <img src={'/images/kleinerHall.jpg'} alt={"KleinerHall"}/>
                            </div>
                        </Carousel>
                </div>
            </div>
        );
    }
}

export default HallsSchemes;