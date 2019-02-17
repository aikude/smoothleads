import { combineReducers } from 'redux';
import leads from './leads';
import alerts from './alerts';
import auth from './auth';

export default combineReducers({
    leads,
    alerts,
    auth
});