import {ADD_USER, EDIT_USER, DEL_USER} from "../actions/actionsNames";
const initialState = [
    {name: "Adam",
    surname: "Kowalski",
    age: 33},
    {name: "Artur",
    surname: "Nowak",
    age: 45},
    {name: "Krystyna",
    surname: "Bąk",
    age: 21},

]
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return "OK";
        case EDIT_USER:
            return "Edit";
        case DEL_USER:
            return "Del";
        default:
            return state;
    }
}

export default usersReducer;
