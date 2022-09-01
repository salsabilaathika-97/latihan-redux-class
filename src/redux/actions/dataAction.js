import axios from 'axios';
import TYPES from "../types";

export const getData = () => (dispatch) => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        dispatch({
            type: TYPES.FETCH_DATA,
            payload: res.data.data,
        })
      })
      .catch((err) => console.log(err));
}