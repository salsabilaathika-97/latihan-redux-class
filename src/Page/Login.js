import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../redux/actions/authAction";

const Login = () => {
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

    const handleLogin = () => {
        dispatch(getLogin(email, password));
    }

    console.log(auth);

    return (
        <div>
            <div style = {{ width:"100%" }}>
                <div style = {{ width: "400px", margin: "0 auto" }}>
                    <h1>Login Page</h1>
                    <div style = {{ display: "flex", flexDirection: "column" }}>
                        <label>Email</label>
                        <input onChange={(e) => handleEmail(e)} type="text" />
                    </div>
                    <div style = {{ display: "flex", flexDirection: "column" }}>
                        <label>Password</label>
                        <input onChange={(e) => handlePassword(e)} type="password" />
                    </div>
                    <button onClick={handleLogin} style = {{ width: "100%", marginTop: "12px" }}>Login</button>
                {
                    !!auth.tokenLogin.length && <h1>Selamat</h1>
                }
                </div>
            </div>
        </div>
    )
}

export default Login;