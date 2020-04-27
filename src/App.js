import "./styles/styles.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {BrowserRouter} from 'react-router-dom';
import Menu from "./components/Menu/Menu";
import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import Scroll from "./components/Scroll/Scroll";

class App extends Component {
    state = {
        isShow: false
    };

    showMenu = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    };

    render() {
        const isMenuShow = this.state.isShow;
        return (
            <BrowserRouter>
                <Scroll>
                    <CSSTransition
                        in={isMenuShow}
                        timeout={500}
                        classNames="alert"
                        onEnter={() => this.setState({isShow: true})}
                        onExit={() => this.setState({isShow: false})}
                    >
                        <Menu
                            isMenuOpen={this.state.isShow}
                            showMenu={this.showMenu}
                        />
                    </CSSTransition>
                    <Header
                        showMenu={this.showMenu}
                    />
                    <Main/>
                </Scroll>
            </BrowserRouter>
        );
    }
}
export default App
