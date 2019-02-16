import { combineReducers } from 'redux';
import leads from './leads';
import alerts from './alerts';

export default combineReducers({
    leads,
    alerts
});