import {ADD_COLLECTION} from "../actions/actionsNames";


const collectionReducer = (state = "brak danych", action) => {
    switch (action.type) {
        case ADD_COLLECTION:
            return action.payload;
        default:
            return state;

    }
}

export default collectionReducer;