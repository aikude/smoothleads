import { CREATE_ALERTS, CLEAR_ALERTS } from './types';

export const clearAlerts = () => {
    return { type: CLEAR_ALERTS, payload: [] };
}
