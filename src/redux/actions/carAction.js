import axios from "axios"
import TYPES from "../types"

export const handleCar = (id) => (dispatch) => {
    axios
      .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) => {
        dispatch({
          type: TYPES.GET_CAR,
          payload: res.data,
        })
      })
      .catch((err) => console.log(err.message))
  }