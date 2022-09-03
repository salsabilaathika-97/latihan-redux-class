import React from "react";

const Login = () => {
    return (
        <div>
            <div style = {{ width:"100%" }}>
                <div style = {{ width: "400px", margin: "0 auto" }}>
                    <h1>Login Page</h1>
                    <div style = {{ display: "flex", flexDirection: "column" }}>
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div style = {{ display: "flex", flexDirection: "column" }}>
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <button style = {{ width: "100%", marginTop: "12px" }}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;