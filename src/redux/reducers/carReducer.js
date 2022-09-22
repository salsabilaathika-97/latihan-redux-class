import TYPES from "../types"

const initialState = {
  cars: [],
}

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CARS:
      return {
        ...state,
        cars: action.payload,
      }
    default:
      return state
  }
}

export default carReducer
