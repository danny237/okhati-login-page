import React from 'react'
import style from './FormStyle.module.css';
import logo from '../image/logo.png';
import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';
import TextField from '@material-ui/core/TextField';
import { Button, IconButton } from '@material-ui/core';

export default function LoginForm() {
    return (
        <div className={style.login_page}>
            <div className={style.container}>

                {/* title */}
                <div className={style.title}>
                    <img className={style.logo} src={logo} alt="logo"/>
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
                    <small>or use your own email</small>
                </div>

                {/* form */}
                <form>
                    <div className={style.textField}>
                        <TextField
                        className={style.input_field}
                        label="Email"
                        variant="outlined"
                        helperText="Please enter the valid Email"
                        // error = {true}
                        />
                    </div>
                    <div className={style.textField}>
                        <TextField
                        className={style.input_field}
                        label="Password"
                        variant="outlined"
                        type="password"
                        helperText="Password should at least 8 character and containing alphabet !"
                        // error = {true}
                        />
                    </div>
                    
                    {/* forget msg */}
                    <div className={style.forgetMsg}>
                        <p>Forget Password ?</p>     
                    </div>   
                    <Button variant="contained" color="primary">Sign In</Button>
                </form>

                 <div className={style.terms}>
                    <small>Privacy Policy  Terms & Condition</small>
                 </div>
            </div>  
        </div>
    )
}
