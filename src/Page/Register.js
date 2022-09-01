import React from "react";
import {useState} from "react";
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
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
                <button style = {{ width: "100%", marginTop: "12px" }}>Register</button>
            </div>
        </div>
    )
}

export default Register;