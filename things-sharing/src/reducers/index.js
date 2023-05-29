import usersReducer from "./users";
import orgReducer from "./organisationsDB";
import {combineReducers} from "redux";
import collectionReducer from "./collection";

const allReducers = combineReducers({
    users: usersReducer,
    organisations: orgReducer,
    collection: collectionReducer
})

export default allReducers;