import React from "react";
import {useState} from "react";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {getRegister} from "../redux/actions/authAction";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {auth} = useSelector((state) => state);


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = () => {
        dispatch(getRegister(email, password))
    }

    console.log(auth);
    return (
        <div style = {{ width:"100%" }}>
            <div style = {{ width: "400px", margin: "0 auto" }}>
                <h1>Register Page</h1>
                <div style = {{ display: "flex", flexDirection: "column" }}>
                    <label>Email</label>
                    <input onChange={(e) => handleEmail(e)} type="text" />
                </div>
                <div style = {{ display: "flex", flexDirection: "column" }}>
                    <label>Password</label>
                    <input onChange={(e) => handlePassword(e)} type="password" />
                </div>
                <button onClick = {handleRegister} style = {{ width: "100%", marginTop: "12px" }}>Register</button>
                {
                    !!auth.token.length && <h1>Selamat</h1>
                }
            </div>
        </div>
    )
}

export default Register;