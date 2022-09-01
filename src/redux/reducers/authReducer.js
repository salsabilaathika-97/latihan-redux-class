import TYPES from "../types";

const initialState = {
    data: "",
}

const authReducer = (state = initialState, action) => {
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

export default authReducer;