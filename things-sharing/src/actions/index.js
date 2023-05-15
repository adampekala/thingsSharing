import {ADD_ORGANISATION} from "./actionsNames";

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