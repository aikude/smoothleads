import { CREATE_ALERTS, CLEAR_ALERTS } from './types';

export const clearAlerts = () => {
    return { type: CLEAR_ALERTS, payload: [] };
}

export const createAlert = (message) => {
    return { type: CREATE_ALERTS, payload: [{id: 'custom-alert', msg: message, className:'alert alert-warning'}] };
}
