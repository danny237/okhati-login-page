import React, { useState } from 'react';
import style from '../Theme/LoginStyle.module.css';
import classes from '../Theme/RegisterStyle.module.css';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { EMAIL_FORMAT, PASSWORD_FORMAT } from "../Constants/Formats";
import { PASSWORD_ERROR, EMAIL_ERROR } from '../Constants/ErrorMsg';
import { REGISTER_IMAGE_URL } from '../Constants/ImageUrl';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Title from '../Components/Title';
 
export default function RegisterForm() {
    let history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()

        // email validation
        function isValidEmail() {
            if (email.match(EMAIL_FORMAT)) {
                return true;
            } else {
                return false;
            }
        }

        if (isValidEmail() && email !== "") {
            setEmailError(false);
        } else {
            setEmailError(true);
            return;
        }


        // password validation
        if (((password !== "") && (confirmPassword !== "")) && 
        ((password.match(PASSWORD_FORMAT))) &&
        (password === confirmPassword)){
            setPasswordError(false)
            
            // register new user
            let newUser = {
                email,
                password
            }

            let localUsers = JSON.parse(localStorage.getItem("users"))
            if(localUsers){
                let newUserList = Array.from(localUsers)
                newUserList.push(newUser)
                localStorage.setItem("users", JSON.stringify(newUserList))
            }else{
                let newList = []
                newList.push(newUser)
                localStorage.setItem("users", JSON.stringify(newList))
            }
            history.push('/success');

        }else{
            setPasswordError(true)
            return;
        }        
    }


    return (
        <div className={classes.registerPage}>
            <div className={classes.container}>

                {/* left section */}
                <div className={classes.leftSection}>
                    <img
                        width="400px"
                        src={REGISTER_IMAGE_URL} alt="report" />
                </div>

                {/* right section */}
                <div className={classes.rightSection}>

                    {/* title component*/}
                    <Title />

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
                                helperText={emailError ? EMAIL_ERROR : ""}
                                error={emailError}
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
                                error = {passwordError}
                            />
                        </div>
                        <div className={style.textField}>
                            <TextField
                                className={style.input_field}
                                value={confirmPassword}
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                helperText={passwordError
                                    ? PASSWORD_ERROR
                                    : ""
                                }
                                error={passwordError}
                            />
                        </div>

                        {/* forget msg */}
                        <div className={style.extraMsg}>
                            <p>Already a member? </p>
                            <Link to="/">
                                <p style={{color: "#009653", marginLeft: "2px"}}>Sign In</p>
                            </Link>
                        </div>
                        <div className={style.signinBtn}>
                        <Button
                            
                            type="submit"
                            size="medium"
                            variant="contained"
                            color="primary"
                        >
                            Sign Up
                    </Button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
