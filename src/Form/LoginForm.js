import React, { useState, useContext } from "react";
import style from "../Theme/LoginStyle.module.css";
import ButtonComp from "../Components/Button";
import { Link } from 'react-router-dom';

import { LOGIN_IMAGE_URL } from '../Constants/ImageUrl';
import { LOGIN_ERROR_MSG } from '../Constants/ErrorMsg';

import { LoginContext } from '../App';
import Title from "../Components/Title";
import TextFieldComp from "../Components/TextField";


export default function LoginForm() {

    const { setLoginStatus } = useContext(LoginContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginError, setLoginError] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users"))
        if (users) {
            for (let user of users) {
                if (isValidUser(user)) {
                    setLoginStatus(true)
                    return;
                } else {
                    setLoginError(true)
                }
            }
        } else {
            setLoginError(true)
        }

        function isValidUser(user) {
            if ((email === user.email) && password === user.password) {
                return true
            } else {
                return false
            }
        }
    };

    return (
        <div className={style.login_page}>
            <div className={style.container}>

                <div className={style.leftSection}>

                    {/* title component*/}
                    <Title />

                    {/* form */}
                    <form
                        onSubmit={(e) => submitHandler(e)}
                        className={style.form}
                    >
                        <TextFieldComp
                            value={email}
                            label="Email"
                            variant="outlined"
                            type="text"
                            error={loginError}
                            onChange={setEmail}
                        />

                        <TextFieldComp
                            value={password}
                            label="Password"
                            variant="outlined"
                            type="password"
                            onChange={setPassword}
                            msg={LOGIN_ERROR_MSG}
                            error={loginError}
                        />

                        {/* extra msg */}
                        <div className={style.extraMsg}>
                            <p>Forgot Password ?</p>
                            <Link to="/register" className={style.link}>
                                <p style={{ color: "#009653", marginLeft: "4px" }}>Sign Up</p>
                            </Link>
                        </div>
                        <div className={style.signinBtn}>
                            <ButtonComp>Sign In</ButtonComp>
                        </div>
                    </form>

                    <div className={style.terms}>
                        <small style={{ color: "#9C9C9C" }}>
                            Privacy Policy &bull; Terms & Condition
                    </small>
                    </div>
                </div>

                <div className={style.rightSection}>
                    <img
                        width="400px"
                        src={LOGIN_IMAGE_URL}
                        alt="heroImage" />
                </div>
            </div>
        </div>
    );
}
