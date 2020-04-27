import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, {DateUtils} from 'react-day-picker';

export default class DatePicker extends React.Component {
    static defaultProps = {
        numberOfMonths: 1,
    };

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        if(typeof range.from !== "undefined" && typeof range.to !== "undefined" && range.from !== null && range.to !== null){
            const from = range.from.getTime();
            const to = range.to.getTime();
            return range.from === range.to ? this.props.selectDaysHandler(from - 43200000, to + 43200000) : this.props.selectDaysHandler(from, to + 43200000)
        } else {
            this.props.selectDaysHandler(1, 100000000000000000)
        }
    }

    handleResetClick() {
        this.setState(this.getInitialState());
    }

    render() {
        const {from, to} = this.state;
        const modifiers = {start: from, end: to};
        return (
            <div className="RangeExample">
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, {from, to}]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
                <Helmet>
                    <style>{`
                      .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                        background-color: #f0f8ff !important;
                        color: #4a90e2;
                      }
                      .Selectable .DayPicker-Day {
                        border-radius: 0 !important;
                      }
                      .Selectable .DayPicker-Day--start {
                        border-top-left-radius: 50% !important;
                        border-bottom-left-radius: 50% !important;
                      }
                      .Selectable .DayPicker-Day--end {
                        border-top-right-radius: 50% !important;
                        border-bottom-right-radius: 50% !important;
                      }
                    `}</style>
                </Helmet>
            </div>
        );
    }
}
