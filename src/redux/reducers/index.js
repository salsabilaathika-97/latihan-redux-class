import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    dataUser: dataReducer,
    auth: authReducer,
})

export default rootReducer;