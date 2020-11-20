import React, { useState, useContext } from "react";
import style from "../Theme/LoginStyle.module.css";
import logo from "../image/logo.png";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

import { LOGIN_IMAGE_URL } from '../Constants/ImageUrl';
import { LOGIN_ERROR_MSG } from '../Constants/ErrorMsg';

import { LoginContext } from '../App';


export default function LoginForm() {

    const [loginStatus, setLoginStatus] = useContext(LoginContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginError, setLoginError] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users"))
        for (let user of users){
            if (isValidUser(user)){
                setLoginStatus(true)
            }else{
                setLoginError(true)
            }
        }
        
        function isValidUser(user){
            if((email === user.email) && password === user.password){
               return true
            }else{
                return false
            }
        }

        
    };

    return (
        <div className={style.login_page}>
            <div className={style.container}>

                <div className={style.leftSection}>
                    {/* title */}
                    <div className={style.title}>
                        <img className={style.logo} src={logo} alt="logo" />
                        <h1>Okhati</h1>
                    </div>

                    {/* social auth */}
                    <div className={style.social_media}>
                        <div>
                            <FaFacebook />
                        </div>
                        <div>
                            <FaLinkedin />
                        </div>
                        <div>
                            <FaGoogle />
                        </div>
                    </div>

                    <div>
                        <small style={{ color: "#9C9C9C" }}>or use your own email</small>
                    </div>

                    {/* form */}
                    <form 
                    onSubmit={(e) => submitHandler(e)}
                    className={style.form}
                    >
                        <div className={style.textField}>
                            <TextField
                                className={style.input_field}
                                value={email}
                                label="Email"
                                variant="outlined"
                                type="text"
                                error={loginError}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={style.textField}>
                            <TextField
                                className={style.input_field}
                                value={password}
                                label="Password"
                                variant="outlined"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                helperText={ loginError
                                        ? LOGIN_ERROR_MSG
                                        : ""
                                }
                                error={loginError}
                            />
                        </div>

                        {/* extra msg */}
                        <div className={style.extraMsg}>
                            <p>Forget Password ?</p>
                            <Link to="/register">
                                <p style={{color: "#009653"}}>Sign Up</p>
                            </Link>
                        </div>
                        <div className={style.signinBtn}>
                        <Button
                            type="submit"
                            size="medium"
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                    </Button>
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
