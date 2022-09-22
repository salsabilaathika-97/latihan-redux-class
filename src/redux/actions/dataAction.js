import axios from 'axios';
import TYPES from "../types";

export const getData = () => (dispatch) => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
      .then((res) => {
        dispatch({
            type: TYPES.FETCH_DATA,
            payload: res.data,
        })
      })
      .catch((err) => console.log(err));
}

export const getMockData = () => (dispatch) => {
    axios
    .get("http://localhost:3001/admin/car")
    .then((res) => {
      dispatch({
          type: TYPES.FETCH_DATA,
          payload: res.data,
      })
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}