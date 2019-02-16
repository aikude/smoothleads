import { CREATE_ALERTS, CLEAR_ALERTS } from "../actions/types.js";

const initialState = {
    alerts: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_ALERTS:
            //return { ...state, alerts: [...state.alerts, ...action.payload] }
            return { ...state, alerts: action.payload }
        case CLEAR_ALERTS:
            return { ...state, alerts: [] }
        default:
            return state;
    }
}