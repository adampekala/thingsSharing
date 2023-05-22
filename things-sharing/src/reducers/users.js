import { SHOW_LOGGED_USER, EDIT_USER, DEL_USER } from "../actions/actionsNames";

const usersReducer = (state ='', action) => {
    switch (action.type) {
        case SHOW_LOGGED_USER:
            return action.user;
        case EDIT_USER:
            return "Edit";
        case DEL_USER:
            return "Del";
        default:
            return state;
    }
}
export default usersReducer;
