import React, {Component} from "react";
import { connect } from "react-redux";
import { getLogin } from "../redux/actions/authAction";

class LoginClass extends Component {
 
    state = { 
        email: "",
        password: ""
     }

    handlEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleLogin = () => {
        const {email, password} = this.state
        this.props.getLogin(email, password)
    }

    render() {
        console.log(this.props.auth);
        return ( 
        <div>
            <div style = {{ width:"100%" }}>
                <div style = {{ width: "400px", margin: "0 auto" }}>
                    <h1>Login Page</h1>
                    <div style = {{ display: "flex", flexDirection: "column" }}>
                        <label>Email</label>
                        <input onChange={this.handlEmail} type="text" />
                    </div>
                    <div style = {{ display: "flex", flexDirection: "column" }}>
                        <label>Password</label>
                        <input onChange={this.handlePassword} type="password" />
                    </div>
                    <button onClick={this.handleLogin} style = {{ width: "100%", marginTop: "12px" }}>Login</button>
                </div>
            </div>
        </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    getLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginClass);