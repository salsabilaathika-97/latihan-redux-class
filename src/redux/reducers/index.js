import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import authReducer from "./authReducer";
import carReducer from "./carReducer";

const rootReducer = combineReducers({
    dataUser: dataReducer,
    auth: authReducer,
    car: carReducer,
})

export default rootReducer;