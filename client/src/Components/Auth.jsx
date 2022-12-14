import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg'

const cookies = new Cookies();

const initialAtate = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}
const Auth = () => {
    const [form, setForm] = useState();
    const [isSignup, setisSignup] = useState(true);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, username, password, phoneNumber, avatarURL } = form;
        const URL = 'http://localhost:5000/auth';
        const { data: { token, userId, hashedPassword } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, { username, password, fullName, phoneNumber, avatarURL });
        Cookies.set('token', token);
        Cookies.set('username', username);
        Cookies.set('fullName', fullName);
        Cookies.set('userId', userId);

        if (isSignup) {
            Cookies.set('phoneNumber', phoneNumber);
            Cookies.set('avatarURL', avatarURL);
            Cookies.set('hashedPassword', hashedPassword);

        }

        window.location.reload();


    }
    const switchMode = () => {
        setisSignup((prevIsSignup) => !prevIsSignup);
    }
    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'sign Up' : 'Sign In'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input
                                    name="avatarURL"
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}


                        <div className="auth__form-container_fields-content_button">
                            <button> {isSignup ? "Sign UP" : "Sign In"}</button>
                        </div>

                    </form>


                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup
                                ? "Already have an account?  "
                                : "Dont have an account?"
                            }
                            <span onClick={switchMode}>
                                {isSignup ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>
                    </div>

                </div>
            </div>
            <div className="auth__form-container_image">
                <img src={signinImage} alt='sign in image'></img>
            </div>
        </div>
    )
}

export default Auth
