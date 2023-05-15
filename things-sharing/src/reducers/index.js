import usersReducer from "./users";
import orgReducer from "./organisationsDB";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    users: usersReducer,
    organisations: orgReducer
})

export default allReducers;