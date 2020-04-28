import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from "yup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";


class Login extends Component {
    state = {
        isLogged: false,
        popup: 'You already logged',
        isSucceed: true
    };

    componentDidMount() {
        if (localStorage.getItem('isLogged') === 'true') {
            this.setState({isLogged: true})
        }
    }

    logOutMethod = () => {
        localStorage.removeItem('isLogged');
        this.setState({isLogged: false})
    };

    render() {
        const values = {
            email: '',
            password: '',
        };

        const validation = Yup.object().shape({
            email: Yup.string()
                .matches(/^[0-9a-z-_.]{3,100}@[0-9a-z-]{2,}\.[a-z]{2,}$/i,'Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .max(25,'Password must be 25 characters or less')
                .required('Password is required'),
        });

        const handleSubmit = fields => {
            let {email, password} = fields;

            fetch('https://ticketserviceapp.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.setState({isLogged: true,
                            popup: 'You already logged',
                            isSucceed: true});
                        localStorage.setItem('isLogged', "true")
                    }
                    else {
                        this.setState({isLogged: true,
                            popup: 'No user. Check input data',
                            isSucceed: false});
                    }
                })
        };

        let LoginForm = ({handleSubmit}) => (
            <>
                <div className={"main__title"}>
                    <h1>Login</h1>
                </div>
                <div className={"main__login"}>
                    <div className={"main__login--left"}>
                        <h3>I am already customer</h3>
                        <Form onSubmit={handleSubmit} className={"main__login__column--left"}>
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            <Field
                                placeholder={'Email *'}
                                name={'email'}
                                type={'text'}
                                className={'form-control'}>
                            </Field>
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            <Field
                                placeholder={'Password *'}
                                name="password"
                                type={'text'}
                                className={'form-control'}
                                component={ShowHidePassword}>
                            </Field>
                            <Link to={'/recovery-password/'} id={"link__remind__password"}>Forgotten password?</Link>
                            <button type="submit">Login</button>
                        </Form>
                    </div>
                    <div className={"main__login--right"}>
                        <h3>New customer</h3>
                        <div className={"main__login__column--right"}>
                            <Link to={'/registration'}>
                                <button>Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );

        const SuccessLogged = () => {
            return (
                <div className={"main__popup"}>
                    <h2 className={'text_Logged'}>{this.state.popup}</h2>
                    <div>
                        {this.state.isSucceed ?
                            <button><Link to='/'> Back to Main </Link></button> :
                            <button onClick={() => {
                                this.setState({isLogged: false})
                            }}><Link to='/login'> Back to login </Link></button>
                        }
                    </div>
                    <div>
                        {this.state.isSucceed ?  <button onClick={this.logOutMethod}>Logout</button> : <div/>}
                    </div>
                </div>
            )
        };

        const ShowHidePassword = ({ field, form }) => {
            const [showHidePassword, changeShowHidePassword] = useState(false);
            const hasError = form.touched[field.name] && form.errors[field.name];
            return (
                <div className={"main__password"}>
                    <input
                        type={showHidePassword ? "text" : "password"}
                        {...field}
                        placeholder={"Password *"}
                        className={hasError ? "input-field" : "input-field"}
                    />
                    <i
                        className={hasError}
                        onClick={() => changeShowHidePassword(!showHidePassword)}
                    >
                        {showHidePassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                    </i>
                </div>
            );
        };

        return (
            this.state.isLogged ? <SuccessLogged /> :
                <Formik
                    validationSchema={validation}
                    initialValues={values}
                    onSubmit={handleSubmit}
                    component={LoginForm}>
                </Formik>
        );
    }
}

export default Login;