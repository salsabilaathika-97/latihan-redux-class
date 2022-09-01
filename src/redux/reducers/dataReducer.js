import TYPES from "../types";

const initialState = {
    data: [],
}

const dataReducer = (state=initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default dataReducer;