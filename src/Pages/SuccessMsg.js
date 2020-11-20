import React from 'react'
import style from '../Theme/Success.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function SuccessMsg() {

    return (
        <div className={style.successPage}>
            <h3>Congratulations, your account has been successfully created.</h3>
            <Link to="/">
                <Button color="primary">Sign In</Button>
            </Link>
        </div>
    )
}
