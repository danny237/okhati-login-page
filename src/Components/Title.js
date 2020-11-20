import React from 'react';
import logo from "../image/okhati.png";
import style from '../Theme/LoginStyle.module.css';
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";

export default function Title() {
    return (
        <div>
            {/* title */}
            <div className={style.title}>
                <img className={style.logo} src={logo} alt="logo" />
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
        </div>
    );
}
