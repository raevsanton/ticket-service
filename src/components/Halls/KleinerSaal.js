import React, {Component} from 'react';
import Place from "../Place/Place";

class KleinerSaal extends Component {
    state = {
        colorSeats: [],
        loading: true
    };

    render() {
        let {loading, colorSeats} = this.state;
        let { priceRanges } = this.props.price;
        if (loading) {
            for (let i in priceRanges) {
                for (let j in priceRanges[i].seats) {
                    colorSeats.push({
                        placeColor: priceRanges[i].color,
                        placePrice: priceRanges[i].price
                    })
                }
                this.setState({loading: false})
            }
            colorSeats.reverse();
        }
        let styleOfRow = (i) => (loading) ?
            {background: "white"} :
            {background: this.state.colorSeats[i].placeColor};
        let priceOfPlace = (i) => loading ? 0 : this.state.colorSeats[i].placePrice;

        return (
            <div className="main__hall">
                <div className="main__hall_title">
                    <h3>Buhne</h3>
                </div>
                <div className="main__sides">
                    <div className="main__exit">Notausgang</div>
                    <div className="main__exit">Notausgang</div>
                </div>
                <div className="main__scheme">
                    <div className="row">
                        <p className='hall-row'
                           style={styleOfRow(0)}>
                            <Place row={1} seat={'1L'} place={1} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'2L'} place={2} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'3L'} place={3} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'4L'} place={4} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'5L'} place={5} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'6L'} place={6} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'7L'} place={7} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'8L'} place={8} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'9L'} place={9} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'8R'} place={8} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'7R'} place={7} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'6R'} place={6} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'5R'} place={5} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'4R'} place={4} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'3R'} place={3} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'2R'} place={2} price={priceOfPlace(0)}/>
                            <Place row={1} seat={'1R'} place={1} price={priceOfPlace(0)}/>
                        </p>
                        <div className="w-100"/>
                        <p className={'hall-row'}
                           style={styleOfRow(1)}>
                            <Place row={2} seat={'1L'} place={1} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'2L'} place={2} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'3L'} place={3} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'4L'} place={4} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'5L'} place={5} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'6L'} place={6} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'7L'} place={7} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'8L'} place={8} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'9L'} place={9} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'9R'} place={9} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'8R'} place={8} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'7R'} place={7} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'6R'} place={6} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'5R'} place={5} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'4R'} place={4} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'3R'} place={3} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'2R'} place={2} price={priceOfPlace(1)}/>
                            <Place row={2} seat={'1R'} place={1} price={priceOfPlace(1)}/>
                        </p>
                        <div className="w-100"/>
                        <p className={'hall-row'}
                           style={styleOfRow(2)}>
                            <Place row={3} seat={'1L'} place={1} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'2L'} place={2} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'3L'} place={3} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'4L'} place={4} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'5L'} place={5} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'6L'} place={6} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'7L'} place={7} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'8L'} place={8} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'9L'} place={9} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'10L'} place={10} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'9R'} place={9} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'8R'} place={8} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'7R'} place={7} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'6R'} place={6} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'5R'} place={5} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'4R'} place={4} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'3R'} place={3} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'2R'} place={2} price={priceOfPlace(2)}/>
                            <Place row={3} seat={'1R'} place={1} price={priceOfPlace(2)}/>
                        </p>
                        <div className="w-100"/>
                        <p className={'hall-row'}
                           style={styleOfRow(3)}>
                            <Place row={4} seat={'1L'} place={1} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'2L'} place={2} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'3L'} place={3} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'4L'} place={4} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'5L'} place={5} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'6L'} place={6} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'7L'} place={7} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'8L'} place={8} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'9L'} place={9} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'10L'} place={10} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'10R'} place={10} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'9R'} place={9} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'8R'} place={8} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'7R'} place={7} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'6R'} place={6} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'5R'} place={5} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'4R'} place={4} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'3R'} place={3} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'2R'} place={2} price={priceOfPlace(3)}/>
                            <Place row={4} seat={'1R'} place={1} price={priceOfPlace(3)}/>
                        </p>
                        <div className="w-100"/>
                        <p className={'hall-row'}
                           style={styleOfRow(4)}>
                            <Place row={5} seat={'1L'} place={1} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'2L'} place={2} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'3L'} place={3} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'4L'} place={4} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'5L'} place={5} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'6L'} place={6} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'7L'} place={7} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'8L'} place={8} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'9L'} place={9} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'10L'} place={10} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'11L'} place={11} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'10R'} place={10} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'9R'} place={9} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'8R'} place={8} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'7R'} place={7} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'6R'} place={6} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'5R'} place={5} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'4R'} place={4} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'3R'} place={3} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'2R'} place={2} price={priceOfPlace(4)}/>
                            <Place row={5} seat={'1R'} place={1} price={priceOfPlace(4)}/>
                        </p>
                        <div className="w-100"/>
                        <p className={'hall-row'}
                           style={styleOfRow(5)}>
                            <Place row={6} seat={'1L'} place={1} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'2L'} place={2} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'3L'} place={3} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'4L'} place={4} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'5L'} place={5} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'6L'} place={6} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'7L'} place={7} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'8L'} place={8} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'9L'} place={9} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'10L'} place={10} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'11L'} place={11} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'11R'} place={11} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'10R'} place={10} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'9R'} place={9} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'8R'} place={8} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'7R'} place={7} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'6R'} place={6} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'5R'} place={5} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'4R'} place={4} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'3R'} place={3} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'2R'} place={2} price={priceOfPlace(5)}/>
                            <Place row={6} seat={'1R'} place={1} price={priceOfPlace(5)}/>
                        </p>
                        <div className="w-100"/>
                        <p className={'hall-row'}
                           style={styleOfRow(6)}>
                            <Place row={7} seat={'1L'} place={1} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'2L'} place={2} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'3L'} place={3} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'4L'} place={4} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'5L'} place={5} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'6L'} place={6} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'7L'} place={7} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'8L'} place={8} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'9L'} place={9} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'10L'} place={10} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'11L'} place={11} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'12L'} place={12} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'11R'} place={11} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'10R'} place={10} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'9R'} place={9} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'8R'} place={8} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'7R'} place={7} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'6R'} place={6} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'5R'} place={5} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'4R'} place={4} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'3R'} place={3} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'2R'} place={2} price={priceOfPlace(6)}/>
                            <Place row={7} seat={'1R'} place={1} price={priceOfPlace(6)}/>
                        </p>
                        <div className="w-100"/>
                        <p className={'hall-row'}
                           style={styleOfRow(7)}>
                            <Place row={8} seat={'1L'} place={1} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'2L'} place={2} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'3L'} place={3} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'4L'} place={4} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'5L'} place={5} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'6L'} place={6} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'7L'} place={7} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'8L'} place={8} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'9L'} place={9} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'10L'} place={10} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'11L'} place={11} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'12L'} place={12} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'12R'} place={12} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'11R'} place={11} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'10R'} place={10} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'9R'} place={9} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'8R'} place={8} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'7R'} place={7} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'6R'} place={6} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'5R'} place={5} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'4R'} place={4} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'3R'} place={3} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'2R'} place={2} price={priceOfPlace(7)}/>
                            <Place row={8} seat={'1R'} place={1} price={priceOfPlace(7)}/>
                        </p>
                        <div className="w-100"/>
                        <p className={'hall-row'}
                           style={styleOfRow(8)}>
                            <Place row={9} seat={'1L'} place={1} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'2L'} place={2} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'3L'} place={3} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'4L'} place={4} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'5L'} place={5} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'6L'} place={6} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'7L'} place={7} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'8L'} place={8} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'9L'} place={9} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'10L'} place={10} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'11L'} place={11} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'12L'} place={12} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'13L'} place={13} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'12R'} place={12} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'11R'} place={11} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'10R'} place={10} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'9R'} place={9} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'8R'} place={8} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'7R'} place={7} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'6R'} place={6} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'5R'} place={5} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'4R'} place={4} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'3R'} place={3} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'2R'} place={2} price={priceOfPlace(8)}/>
                            <Place row={9} seat={'1R'} place={1} price={priceOfPlace(8)}/>
                        </p>
                    </div>
                </div>
                <h2>Kleiner Saal</h2>
                <div className="main__sides">
                    <div className="main__sides--wrp">
                        <h4>Left side</h4>
                        <div className="main__exit">Eingang<br/>Ausgang</div>
                    </div>
                    <div className="main__sides--wrp">
                        <h4>Right side</h4>
                        <div className="main__exit">Eingang<br/>Ausgang</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default KleinerSaal;
