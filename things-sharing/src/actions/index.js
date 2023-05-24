import {ADD_ORGANISATION, DEL_ORGANISATION, SHOW_LOGGED_USER, SHOW_ORGANISATION} from "./actionsNames";

export const addOrganisation = (name, mission, needs) => {
    return {
        type: ADD_ORGANISATION,
        payload: {
            name: name,
            mission: mission,
            needs: needs,
            bags: 0,
            collections: 0
        }
    }
}

export const showOrganisation = (orgArr) => {
    return {
        type: SHOW_ORGANISATION,
        payload: orgArr
    }
}

export const delOrganisation = (name) => {
    return {
        type: DEL_ORGANISATION,

    }
}

export const showLoggedUser = (user) => {
    return {
        type: SHOW_LOGGED_USER,
        user
    }
}