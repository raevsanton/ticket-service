import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

class Registration extends Component {
    state = {
        popup: false,
        text: "You have successfully registered"
    };
    render() {
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
        const ShowHideConfirmPassword = ({ field, form }) => {
            const [showHidePassword, changeShowHidePassword] = useState(false);
            const hasError = form.touched[field.name] && form.errors[field.name];
            return (
                <div className={"main__password"}>
                    <input
                        type={showHidePassword ? "text" : "password"}
                        {...field}
                        placeholder={"Confirm password *"}
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
        const validation = Yup.object().shape({
            gender: Yup.string()
                .required('Gender is required'),
            firstName: Yup.string()
                .matches(/^[a-z]{2,}$/i,'Invalid name')
                .required('Name is required'),
            lastName: Yup.string()
                .matches(/^[a-z]{2,}$/i,'Invalid surname')
                .required('Surname is required'),
            street: Yup.string()
                .matches(/^([a-z]{2,})\s*[a-z]*$/i,'Invalid street'),
            house: Yup.string()
                .matches(/^[1-9][0-9]*([a-z]|(\/[1-9][0-9]*))?$/i,'Invalid house'),
            email: Yup.string()
                .matches(/^[0-9a-z-_.]{3,100}@[0-9a-z-]{2,}\.[a-z]{2,}$/i,'Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .max(25,'Password must be 25 characters or less')
                .required('Password is required'),
            confirmPassword:  Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
            phoneNumber: Yup.string()
                .matches(/^[+][0-9]{6,17}/,'Invalid telephone')
                .required('Phone number is required'),
            acceptTerms: Yup.string()
                .required('Accept terms is required'),
        });
        const values = {
            gender: '',
            firstName: '',
            lastName: '',
            company: '',
            street: '',
            house: '',
            info: '',
            postcode: '',
            city: '',
            country: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            addPhone: '',
            acceptTerms: ''
        };
        const handleSubmit = fields => {
            let {gender, firstName, lastName, email, password, phoneNumber} = fields;
            const url = 'https://ticketserviceapp.herokuapp.com/user';
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    "gender": gender,
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "password": password,
                    "phoneNumber": phoneNumber
                })
            })
                .then(res => {
                    if(res.status === 400) {
                        this.setState({text: "User with such address already exists", popup: true})
                    }
                    if(res.ok){
                        this.setState({ popup: true });
                    }
                })
        };
        const SuccessRegistered = () => {
            return (
                <div className={"main__popup"}>
                    <h2 className={'text_Logged'}>{this.state.text}</h2>
                    <div>
                        <button><Link to={'/login'}>Go to login</Link></button>
                    </div>
                </div>
            )
        };
        const RegisterForm = ({errors, touched, handleSubmit}) => (
            <>
                <div className="main__title">
                    <h1>Registration</h1>
                </div>
                <Form onSubmit={handleSubmit} className="main__registration">
                    <div className="main__registration__form__left">
                        <h3>Solution and address</h3>
                        <div className={"main__colons--left"}>
                            <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                            <Field as="select" name="gender" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')}>
                                <option value="" label="Select a gender *" />
                                <option value="1" label="Mr." />
                                <option value="2" label="Mrs." />
                            </Field>
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            <Field placeholder="Name *" name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            <Field placeholder="Surname *" name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <Field placeholder="Company" name="company" type="text" className={'form-control'} />
                            <ErrorMessage name="street" component="div" className="invalid-feedback" />
                            <Field placeholder="Street" name="street" type="text" className={'form-control' + (errors.street && touched.street ? ' is-invalid' : '')} />
                            <ErrorMessage name="house" component="div" className="invalid-feedback" />
                            <Field placeholder="House" name="house" type="text" className={'form-control' + (errors.house && touched.house ? ' is-invalid' : '')} />
                            <Field placeholder="Additional info" name="info" type="text" className={'form-control'} />
                            <ErrorMessage name="postcode" component="div" className="invalid-feedback" />
                            <Field placeholder="Postcode" name="postcode" type="text" className={'form-control' + (errors.postcode && touched.postcode ? ' is-invalid' : '')} />
                            <ErrorMessage name="city" component="div" className="invalid-feedback" />
                            <Field placeholder="City" name="city" type="text" className={'form-control' + (errors.city && touched.city ? ' is-invalid' : '')} />
                            <ErrorMessage name="country" component="div" className="invalid-feedback" />
                            <Field placeholder="Country" name="country" type="text" className={'form-control' + (errors.country && touched.country ? ' is-invalid' : '')} />
                        </div>
                    </div>
                    <div className="main__registration__form__right">
                        <h3>Contact information</h3>
                        <div className={"main__colons--space"}>
                            <div className={"main__colons--right"}>
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                <Field placeholder="Email *" name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                <Field placeholder="Password *" name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} component={ShowHidePassword} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                <Field placeholder="Confirm password *" name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} component={ShowHideConfirmPassword} />
                                <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
                                <Field placeholder="Phone number *" name="phoneNumber" type="tel" className={'form-control' + (errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : '')} />
                                <div>
                                    <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                    <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                    <label htmlFor="acceptTerms" className="form-check-label"> * I have read the notice on<Link to={'/terms'} className={"textForFix"}> data protection </Link> and the content of the
                                        <Link to={'/terms'} className={"textForFix"}> Standart Terms </Link>of Business and agree to the storage of my personal data
                                    </label>
                                    <br/><br/>
                                    <Field type="checkbox" name="acceptGet" className={'form-check-input'} />
                                    <label htmlFor="acceptTerms" className="form-check-label"> I agree to get notification on me Email and phone</label>
                                </div>
                                <div className="form-group">
                                    <button type="submit">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </>
        );

        return (
            <>
                {this.state.popup ? <SuccessRegistered /> :
                    <Formik
                        initialValues={values}
                        validationSchema={validation}
                        onSubmit={handleSubmit}
                        component={RegisterForm}>
                    </Formik>}
            </>
        );
    }
}

export default Registration;
