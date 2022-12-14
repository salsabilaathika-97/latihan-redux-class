import axios from "axios";
import TYPES from "../types";

export const getRegister = (email, password) => (dispatch) => {
    const payload = {
        email: email,
        password: password
    }
    axios
    .post("https://reqres.in/api/register", payload)
    .then((res) => 
    {
        console.log(res);
        dispatch({
        type: TYPES.POST_REGIS,
        payload: res.data.token,
    })})
    .catch((err) => console.log(err));
}

export const getLogin = (email,password) => (dispatch) => {
    const payload = {
        email: email,
        password: password
    }
    
    axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
        console.log(res);
        localStorage.setItem('myToken', res.data.token);
        dispatch({
            type: TYPES.POST_LOGIN,
            payload: res.data.token,
        })})
    .catch((err) => console.log(err));
}