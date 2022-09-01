import {combineReducers} from "redux";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    dataUser: dataReducer,
})

export default rootReducer;