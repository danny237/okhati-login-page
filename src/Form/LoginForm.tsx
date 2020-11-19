import React, { useState } from 'react'
import style from './FormStyle.module.css';
import logo from '../image/logo.png';
import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { EMAIL_FORMAT } from '../constants/EmailFormat';

export default function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const submitHandler = (e: any) => {
        e.preventDefault()

        // email validation
        function isValidEmail(){
            if(email.match(EMAIL_FORMAT)){
                return true
            }else{
                return false
            }
        }

        if ((isValidEmail()) && (email !== "")){
            setEmailError(false)
        }else{
            setEmailError(true)
        }

        // password validation
        if ((password === "") || password.length < 8){
            setPasswordError(true)
        }else{
            setPasswordError(false)
        }




        // if((email === "") && (password === "")){
        //     setEmailError(true)
        //     setPasswordError(true)
        // }else{
        //     setEmailError(false)
        //     setPasswordError(false)
        // }
        
    }


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
                    <small style={{color:"#9C9C9C"}}>or use your own email</small>
                </div>

                {/* form */}
                <form onSubmit = {(e) => submitHandler(e)}>
                    <div className={style.textField}>
                        <TextField
                        className={style.input_field}
                        value={email}
                        label="Email"
                        variant="outlined"
                        type="text"
                        helperText={emailError ? "Please enter the valid Email" : ""}
                        error = {emailError}
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
                        helperText={passwordError ? "Password should at least 8 character and containing alphabet !" : " "}
                        error = {passwordError}
                        />
                    </div>
                    
                    {/* forget msg */}
                    <div className={style.forgetMsg}>
                        <p>Forget Password ?</p>     
                    </div>   
                    <Button type="submit" size="medium" variant="contained" color="primary">Sign In</Button>
                </form>

                 <div className={style.terms}>
                    <small style={{color:"#9C9C9C"}}>Privacy Policy  &middot; Terms & Condition</small>
                 </div>
            </div>  
        </div>
    )
}
