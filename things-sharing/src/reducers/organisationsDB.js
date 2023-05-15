import {
    ADD_ORGANISATION,
    DEL_ORGANISATION,
    EDIT_ORGANISATION
} from "../actions/actionsNames";

const initialState = [
    {
        name: 'Fundacja "Dbam o zdrowie"',
        mission: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki'],
        bags: 3,
        collections: 6,
        type: 'Fundacja'
    },

    {
        name: 'Fundacja "Dla dzieci"',
        mission: 'Pomoc dzieciom z ubogich rodzin.',
        needs: ['ubrania', 'meble', 'zabawki'],
        bags: 2,
        collections: 1,
        type: 'Fundacja'
    },

    {
        name: 'Fundacja "Bez domu"',
        mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
        needs: ['ubrania', 'jedzenie', 'ciepłe koce'],
        bags: 3,
        collections: 2,
        type: 'Fundacja'
    },

    {
        name: 'Fundacja "Dbam2"',
        mission: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki'],
        bags: 3,
        collections: 4,
        type: 'Fundacja'
    },

    {
        name: 'Fundacja "Dbam o zdrowie 2"',
        mission: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki'],
        bags: 3,
        collections: 2,
        type: 'Fundacja'
    },

    {
        name: 'Fundacja "Zdrowie"',
        mission: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki'],
        bags: 3,
        collections: 1,
        type: 'Fundacja'
    },

    {
        name: 'Fundacja "Dbam"',
        mission: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki'],
        bags: 3,
        collections: 2,
        type: 'Fundacja'
    },

    {
        name: 'Fundacja "Dbam o zdrowie 2"',
        mission: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki'],
        bags: 3,
        collections: 2,
        type: 'Organizacja pozarządowa'
    },

    {
        name: 'Fundacja "Zdrowie"',
        mission: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki'],
        bags: 3,
        collections: 1,
        type: 'Organizacja pozarządowa'
    },

    {
        name: 'Fundacja "Dbam"',
        mission: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki'],
        bags: 3,
        collections: 2,
        type: 'Organizacja pozarządowa'
    }
]

const organisationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORGANISATION:
            return "OK";
        case EDIT_ORGANISATION:
            return "Edit";
        case DEL_ORGANISATION:
            return "Del";
        default:
            return state;
    }
}

export default organisationsReducer;

