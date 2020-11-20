import React from 'react';
import TextField from "@material-ui/core/TextField";
import style from "../Theme/LoginStyle.module.css";

export default function TextFieldComp(props) {
    return (
        <div className={style.textField}>
            <TextField
                className={style.input_field}
                value={props.value}
                label={props.label}
                variant={props.variant}
                type={props.type}
                error={props.error}
                onChange={(e) => props.onChange(e.target.value)}
                helperText={props.error ? props.msg : ""}
            />
        </div>
    );
}
