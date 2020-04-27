import React, {Component} from 'react';
import Place from "../Place/Place";

class GrosseSaal extends Component {
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
            {background: colorSeats[i].placeColor};

        let priceOfPlace = (i) => loading ?
            0 :
            colorSeats[i].placePrice

        return (
            <div className="main__hall">
                <div className="main__hall_title">
                    <h3>Buhne</h3>
                </div>
                <div className="main__sides">
                    <div className="main__exit">Notausgang</div>
                    <h3>Mittelparkett</h3>
                    <div className="main__exit">Notausgang</div>
                </div>

                <div className="main__scheme">
                    <div className='row w-100'>
                        <div className='col-3 hall-2-left-side'>
                            <div className="row justify-content-center">
                                <p className={'hall-2-row'}
                                   style={styleOfRow(0)}>
                                    <Place row={1} seat={'1L'} place={1} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'2L'} place={2} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'3L'} place={3} price={priceOfPlace(0)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(1)}>
                                    <Place row={2} seat={'1L'} place={1} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'2L'} place={2} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'3L'} place={3} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'4L'} place={4} price={priceOfPlace(1)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(2)}>
                                    <Place row={3} seat={'1L'} place={1} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'2L'} place={2} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'3L'} place={3} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'4L'} place={4} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'5L'} place={5} price={priceOfPlace(2)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(3)}>
                                    <Place row={4} seat={'1L'} place={1} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'2L'} place={2} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'3L'} place={3} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'4L'} place={4} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'5L'} place={5} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'6L'} place={6} price={priceOfPlace(3)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(4)}>
                                    <Place row={5} seat={'1L'} place={1} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'2L'} place={2} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'3L'} place={3} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'4L'} place={4} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'5L'} place={5} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'6L'} place={6} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'7L'} place={7} price={priceOfPlace(4)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(5)}>
                                    <Place row={6} seat={'1L'} place={1} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'2L'} place={2} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'3L'} place={3} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'4L'} place={4} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'5L'} place={5} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'6L'} place={6} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'7L'} place={7} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'8L'} place={8} price={priceOfPlace(5)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
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
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
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
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
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
                                </p>
                            </div>

                            <div className="row justify-content-end left-bottom-side">
                                <p className={'hall-2-row'}
                                   style={styleOfRow(9)}>
                                    <Place row={10} seat={'1L'} place={1} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'2L'} place={2} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'3L'} place={3} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'4L'} place={4} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'5L'} place={5} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'6L'} place={6} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'7L'} place={7} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'8L'} place={8} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'9L'} place={9} price={priceOfPlace(9)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(10)}>
                                    <Place row={11} seat={'1L'} place={1} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'2L'} place={2} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'3L'} place={3} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'4L'} place={4} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'5L'} place={5} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'6L'} place={6} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'7L'} place={7} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'8L'} place={8} price={priceOfPlace(10)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(11)}>
                                    <Place row={12} seat={'1L'} place={1} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'2L'} place={2} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'3L'} place={3} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'4L'} place={4} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'5L'} place={5} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'6L'} place={6} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'7L'} place={7} price={priceOfPlace(11)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(12)}>
                                    <Place row={13} seat={'1L'} place={1} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'2L'} place={2} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'3L'} place={3} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'4L'} place={4} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'5L'} place={5} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'6L'} place={6} price={priceOfPlace(12)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(13)}>
                                    <Place row={14} seat={'1L'} place={1} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'2L'} place={2} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'3L'} place={3} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'4L'} place={4} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'5L'} place={5} price={priceOfPlace(13)}/>
                                </p>
                                <div className="w-100"/>
                            </div>
                        </div>
                        <div className='col-6 hall-2-center'>
                            <div className="row justify-content-center">
                                <p className={'hall-2-row'}
                                   style={styleOfRow(0)}>
                                    <Place row={1} seat={'4L'} place={4} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'5L'} place={5} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'6L'} place={6} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'7L'} place={7} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'8L'} place={8} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'9L'} place={9} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'10L'} place={10} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'11L'} place={11} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'10R'} place={10} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'9R'} place={9} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'8R'} place={8} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'7R'} place={7} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'6R'} place={6} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'5R'} place={5} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'4R'} place={4} price={priceOfPlace(0)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(1)}>
                                    <Place row={2} seat={'5L'} place={5} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'6L'} place={6} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'7L'} place={7} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'8L'} place={8} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'9L'} place={9} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'10L'} place={10} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'11L'} place={11} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'12L'} place={12} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'12R'} place={12} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'11R'} place={11} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'10R'} place={10} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'9R'} place={9} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'8R'} place={8} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'7R'} place={7} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'6R'} place={6} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'5R'} place={5} price={priceOfPlace(1)}/>
                                </p>

                                <p className={'hall-2-row'}
                                   style={styleOfRow(2)}>
                                    <Place row={3} seat={'6L'} place={6} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'7L'} place={7} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'8L'} place={8} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'9L'} place={9} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'10L'} place={10} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'11L'} place={11} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'12L'} place={12} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'13L'} place={13} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'14L'} place={14} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'13R'} place={13} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'12R'} place={12} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'11R'} place={11} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'10R'} place={10} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'9R'} place={9} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'8R'} place={8} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'7R'} place={7} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'6R'} place={6} price={priceOfPlace(2)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(3)}>
                                    <Place row={4} seat={'7L'} place={7} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'8L'} place={8} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'9L'} place={9} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'10L'} place={10} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'11L'} place={11} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'12L'} place={12} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'13L'} place={13} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'14L'} place={14} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'15L'} place={15} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'15R'} place={15} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'14R'} place={14} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'13R'} place={13} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'12R'} place={12} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'11R'} place={11} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'10R'} place={10} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'9R'} place={9} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'8R'} place={8} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'7R'} place={7} price={priceOfPlace(3)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(4)}>
                                    <Place row={5} seat={'8L'} place={8} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'9L'} place={9} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'10L'} place={10} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'11L'} place={11} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'12L'} place={12} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'13L'} place={13} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'14L'} place={14} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'15L'} place={15} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'16L'} place={16} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'17L'} place={17} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'16R'} place={16} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'15R'} place={15} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'14R'} place={14} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'13R'} place={13} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'12R'} place={12} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'11R'} place={11} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'10R'} place={10} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'9R'} place={9} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'8R'} place={8} price={priceOfPlace(4)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(5)}>
                                    <Place row={6} seat={'9L'} place={9} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'10L'} place={10} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'11L'} place={11} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'12L'} place={12} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'13L'} place={13} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'14L'} place={14} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'15L'} place={15} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'16L'} place={16} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'17L'} place={17} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'18L'} place={18} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'18R'} place={18} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'17R'} place={17} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'16R'} place={16} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'15R'} place={15} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'14R'} place={14} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'13R'} place={13} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'12R'} place={12} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'11R'} place={11} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'10R'} place={10} price={priceOfPlace(5)}/>
                                    <Place row={6} seat={'9R'} place={9} price={priceOfPlace(5)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(6)}>
                                    <Place row={7} seat={'10L'} place={10} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'11L'} place={11} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'12L'} place={12} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'13L'} place={13} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'14L'} place={14} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'15L'} place={15} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'16L'} place={16} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'17L'} place={17} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'18L'} place={18} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'19L'} place={19} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'20L'} place={20} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'19R'} place={19} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'18R'} place={18} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'17R'} place={17} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'16R'} place={16} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'15R'} place={15} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'14R'} place={14} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'13R'} place={13} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'12R'} place={12} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'11R'} place={11} price={priceOfPlace(6)}/>
                                    <Place row={7} seat={'10R'} place={10} price={priceOfPlace(6)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(7)}>
                                    <Place row={8} seat={'11L'} place={11} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'12L'} place={12} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'13L'} place={13} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'14L'} place={14} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'15L'} place={15} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'16L'} place={16} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'17L'} place={17} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'18L'} place={18} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'19L'} place={19} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'20L'} place={20} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'21L'} place={21} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'21R'} place={21} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'20R'} place={20} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'19R'} place={19} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'18R'} place={18} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'17R'} place={17} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'16R'} place={16} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'15R'} place={15} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'14R'} place={14} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'13R'} place={13} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'12R'} place={12} price={priceOfPlace(7)}/>
                                    <Place row={8} seat={'11R'} place={11} price={priceOfPlace(7)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(8)}>
                                    <Place row={9} seat={'11L'} place={11} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'12L'} place={12} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'13L'} place={13} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'14L'} place={14} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'15L'} place={15} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'16L'} place={16} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'17L'} place={17} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'18L'} place={18} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'19L'} place={19} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'20L'} place={20} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'21L'} place={21} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'22L'} place={22} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'21R'} place={21} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'20R'} place={20} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'19R'} place={19} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'18R'} place={18} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'17R'} place={17} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'16R'} place={16} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'15R'} place={15} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'14R'} place={14} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'13R'} place={13} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'12R'} place={12} price={priceOfPlace(8)}/>
                                    <Place row={9} seat={'11R'} place={11} price={priceOfPlace(8)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(9)}>
                                    <Place row={10} seat={'10L'} place={10} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'11L'} place={11} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'12L'} place={12} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'13L'} place={13} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'14L'} place={14} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'15L'} place={15} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'16L'} place={16} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'17L'} place={17} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'18L'} place={18} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'19L'} place={19} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'20L'} place={20} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'20R'} place={20} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'19R'} place={19} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'18R'} place={18} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'17R'} place={17} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'16R'} place={16} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'15R'} place={15} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'14R'} place={14} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'13R'} place={13} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'12R'} place={12} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'11R'} place={11} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'10R'} place={10} price={priceOfPlace(9)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(10)}>
                                    <Place row={11} seat={'9L'} place={9} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'10L'} place={10} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'11L'} place={11} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'12L'} place={12} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'13L'} place={13} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'14L'} place={14} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'15L'} place={15} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'16L'} place={16} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'17L'} place={17} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'18L'} place={18} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'19L'} place={19} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'18R'} place={18} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'17R'} place={17} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'16R'} place={16} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'15R'} place={15} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'14R'} place={14} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'13R'} place={13} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'12R'} place={12} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'11R'} place={11} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'10R'} place={10} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'9R'} place={9} price={priceOfPlace(10)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(11)}>
                                    <Place row={12} seat={'8L'} place={8} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'9L'} place={9} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'10L'} place={10} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'11L'} place={11} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'12L'} place={12} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'13L'} place={13} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'14L'} place={14} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'15L'} place={15} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'16L'} place={16} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'17L'} place={17} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'17R'} place={17} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'16R'} place={16} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'15R'} place={15} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'14R'} place={14} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'13R'} place={13} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'12R'} place={12} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'11R'} place={11} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'10R'} place={10} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'9R'} place={9} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'8R'} place={8} price={priceOfPlace(11)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(12)}>
                                    <Place row={13} seat={'7L'} place={7} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'8L'} place={8} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'9L'} place={9} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'10L'} place={10} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'11L'} place={11} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'12L'} place={12} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'13L'} place={13} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'14L'} place={14} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'15L'} place={15} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'16L'} place={16} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'17L'} place={17} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'16R'} place={16} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'15R'} place={15} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'14R'} place={14} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'13R'} place={13} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'12R'} place={12} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'11R'} place={11} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'10R'} place={10} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'9R'} place={9} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'8R'} place={8} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'7R'} place={7} price={priceOfPlace(12)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(13)}>
                                    <Place row={14} seat={'6L'} place={6} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'7L'} place={7} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'8L'} place={8} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'9L'} place={9} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'10L'} place={10} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'11L'} place={11} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'12L'} place={12} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'13L'} place={13} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'14L'} place={14} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'15L'} place={15} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'16L'} place={16} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'16R'} place={16} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'15R'} place={15} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'14R'} place={14} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'13R'} place={13} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'12R'} place={12} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'11R'} place={11} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'10R'} place={10} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'9R'} place={9} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'8R'} place={8} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'7R'} place={7} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'6R'} place={6} price={priceOfPlace(13)}/>
                                </p>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(14)}>
                                    <Place row={15} seat={'1L'} place={1} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'2L'} place={2} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'3L'} place={3} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'4L'} place={4} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'5L'} place={5} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'6L'} place={6} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'7L'} place={7} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'8L'} place={8} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'9L'} place={9} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'10L'} place={10} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'11L'} place={11} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'12L'} place={12} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'11R'} place={11} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'10R'} place={10} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'9R'} place={9} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'8R'} place={8} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'7R'} place={7} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'6R'} place={6} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'5R'} place={5} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'4R'} place={4} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'3R'} place={3} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'2R'} place={2} price={priceOfPlace(14)}/>
                                    <Place row={15} seat={'1R'} place={1} price={priceOfPlace(14)}/>
                                </p>
                            </div>
                        </div>
                        <div className='col-3 hall-2-right-side'>
                            <div className="row justify-content-center">
                                <p className={'hall-2-row'}
                                   style={styleOfRow(0)}>
                                    <Place row={1} seat={'3R'} place={3} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'2R'} place={2} price={priceOfPlace(0)}/>
                                    <Place row={1} seat={'1R'} place={1} price={priceOfPlace(0)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(1)}>
                                    <Place row={2} seat={'4R'} place={4} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'3R'} place={3} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'2R'} place={2} price={priceOfPlace(1)}/>
                                    <Place row={2} seat={'1R'} place={1} price={priceOfPlace(1)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(2)}>
                                    <Place row={3} seat={'5R'} place={5} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'4R'} place={4} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'3R'} place={3} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'2R'} place={2} price={priceOfPlace(2)}/>
                                    <Place row={3} seat={'1R'} place={1} price={priceOfPlace(2)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(3)}><Place
                                    row={4} seat={'6R'} place={6}/>
                                    <Place row={4} seat={'5R'} place={5} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'4R'} place={4} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'3R'} place={3} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'2R'} place={2} price={priceOfPlace(3)}/>
                                    <Place row={4} seat={'1R'} place={1} price={priceOfPlace(3)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(4)}>
                                    <Place row={5} seat={'7R'} place={7} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'6R'} place={6} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'5R'} place={5} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'4R'} place={4} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'3R'} place={3} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'2R'} place={2} price={priceOfPlace(4)}/>
                                    <Place row={5} seat={'1R'} place={1} price={priceOfPlace(4)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(5)}>
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
                                <p className={'hall-2-row'}
                                   style={styleOfRow(6)}>
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
                                <p className={'hall-2-row'}
                                   style={styleOfRow(7)}>
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
                                <p className={'hall-2-row'}
                                   style={styleOfRow(8)}>
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
                            <div className="row justify-content-start right-bottom-side">
                                <p className={'hall-2-row'}
                                   style={styleOfRow(9)}>
                                    <Place row={10} seat={'9R'} place={9} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'8R'} place={8} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'7R'} place={7} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'6R'} place={6} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'5R'} place={5} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'4R'} place={4} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'3R'} place={3} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'2R'} place={2} price={priceOfPlace(9)}/>
                                    <Place row={10} seat={'1R'} place={1} price={priceOfPlace(9)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(10)}>
                                    <Place row={11} seat={'8R'} place={8} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'7R'} place={7} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'6R'} place={6} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'5R'} place={5} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'4R'} place={4} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'3R'} place={3} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'2R'} place={2} price={priceOfPlace(10)}/>
                                    <Place row={11} seat={'1R'} place={1} price={priceOfPlace(10)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(11)}>
                                    <Place row={12} seat={'7R'} place={7} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'6R'} place={6} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'5R'} place={5} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'4R'} place={4} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'3R'} place={3} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'2R'} place={2} price={priceOfPlace(11)}/>
                                    <Place row={12} seat={'1R'} place={1} price={priceOfPlace(11)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(12)}>
                                    <Place row={13} seat={'6R'} place={6} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'5R'} place={5} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'4R'} place={4} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'3R'} place={3} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'2R'} place={2} price={priceOfPlace(12)}/>
                                    <Place row={13} seat={'1R'} place={1} price={priceOfPlace(12)}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-2-row'}
                                   style={styleOfRow(13)}>
                                    <Place row={14} seat={'5R'} place={5} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'4R'} place={4} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'3R'} place={3} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'2R'} place={2} price={priceOfPlace(13)}/>
                                    <Place row={14} seat={'1R'} place={1} price={priceOfPlace(13)}/>
                                </p>
                                <div className="w-100"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Grosse saal</h2>
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

export default GrosseSaal;
