import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div className="error_page">
                    <div className={"main__title error"}>
                        <h1>404</h1>
                    </div>
                    <p className="zoom-area">Page not found</p>
                <img className={'cat__img'} src={'/images/not-found.svg'} alt={'Sad cat'}/>
                <div className={'link__container'}>
                <div className="error__button"><button onClick={() => {
                    return <Link to={`${window.history.back()}`}/>}}>To the previous page</button></div>
                <div className="error__button"><Link to={'/'}><button>To the main page</button></Link></div>
                </div>
            </div>
        );
    }
}

export default NotFound;