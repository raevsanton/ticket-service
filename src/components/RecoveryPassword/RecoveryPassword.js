import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from "yup";

class RecoveryPassword extends Component {
    state = {
        isRecovered: false,
        resText: '',
        isError: false,
        returnLink: '',
        buttonText: ''
    };

    render() {
        const values = {
            email: ''
        };

        const validation = Yup.object().shape({
            email: Yup.string()
                .matches(/^[0-9a-z-_.]{3,100}@[0-9a-z-]{2,}\.[a-z]{2,}$/i,'Invalid email')
                .required('Email is required')
        });

        const handleSubmit = fields => {
            let {email} = fields;

            fetch('https://ticketserviceapp.herokuapp.com/user/password', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email
                })
            })
                .then(response => {
                    if (response.ok) {
                        this.setState({isRecovered: true,
                            resText: 'Recovery was successful, check your e-mail',
                            returnLink: '/login',
                            buttonText: 'Return to login'});
                    }
                    if(!response.ok) {
                        this.setState({isRecovered: true,
                            resText: `User with email ${email} does not exist`,
                            returnLink: '/recovery-password',
                            buttonText: 'Return to recovery'});
                    }
                })
        };

        let RecoveryForm = ({handleSubmit}) => (
            <>
                <div className={"main__title"}>
                    <h1>Recovery password</h1>
                    <h3>We will send recovery information to your e-mail</h3>
                </div>
                <div className={"main__recovery"}>
                    <Form onSubmit={handleSubmit} className={'recovery__pass'}>
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        <Field
                            placeholder={'Email *'}
                            name={'email'}
                            type={'text'}
                            className={'form-control'}>
                        </Field>
                        <button type="submit">Recovery password</button>
                    </Form>
                </div>
            </>
        );

        const SuccessRecovered = () => {
            return (
                <div className={"main__popup"}>
                    <h2 className={'text_Logged'}>{this.state.resText}</h2>
                    <div>
                        <button><Link to={this.state.returnLink}> {this.state.buttonText} </Link></button>
                    </div>
                </div>
            )
        };

        return (
            this.state.isRecovered ? <SuccessRecovered /> :
                <Formik
                    validationSchema={validation}
                    initialValues={values}
                    onSubmit={handleSubmit}
                    component={RecoveryForm}>
                </Formik>
        );
    }
}

export default RecoveryPassword;
