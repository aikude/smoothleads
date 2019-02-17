import axios from 'axios';
import { CREATE_ALERTS, USER_LOADING, USER_LOADED, AUTH_ERROR, NO_TOKEN, LOGIN_SUCCESS, 
        LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { AUTH_URL } from '../constants';
import { apiErrorToAlerts } from '../helpers';

export const getTokenConfig = (getState) => {
    const token = getState().auth.token;
    const config = { headers: {'Content-Type': 'application/json' } };

    if(token) config.headers['Authorization'] = `Token ${token}`;

    return config;

}

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
    axios.get(`${AUTH_URL}/user`, getTokenConfig(getState))
    .then(response => {
        dispatch({ type: USER_LOADED, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: AUTH_ERROR });

        const alerts = apiErrorToAlerts(error);
        dispatch({ type: CREATE_ALERTS, payload: alerts });
    });
}

// Login user
export const loginUser = (username, password) => dispatch => {
    // First trigger user loading action
    dispatch({ type: USER_LOADING });

    axios.post(`${AUTH_URL}/login`, { username, password })
    .then(response => {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: LOGIN_FAIL });

        const alerts = apiErrorToAlerts(error);
        dispatch({ type: CREATE_ALERTS, payload: alerts });
    });
}

// Register user
export const registerUser = ({ username, password, email }) => dispatch => {

    axios.post(`${AUTH_URL}/register`, { username, password, email })
    .then(response => {
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: REGISTER_FAIL });

        const alerts = apiErrorToAlerts(error);
        dispatch({ type: CREATE_ALERTS, payload: alerts });
    });
}

// Logout user
export const logoutUser = () => (dispatch, getState) => {
    axios.post(`${AUTH_URL}/logout`, null, getTokenConfig(getState))
    .then(response => {
        dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch(error => {
        dispatch({ type: AUTH_ERROR });

        const alerts = apiErrorToAlerts(error);
        dispatch({ type: CREATE_ALERTS, payload: alerts });
    });
}
