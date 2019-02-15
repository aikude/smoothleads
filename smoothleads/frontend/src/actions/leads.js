import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';
import { SERVER_URL } from '../constants';

export const getLeads = () => dispatch => {
    axios.get(SERVER_URL)
    .then(response => {
        dispatch({ type: GET_LEADS, payload: response.data });
    })
    .catch(error => { console.log(error)});
}

export const deleteLead = (id) => dispatch => {
    axios.delete(`${SERVER_URL}${id}/`)
    .then(response => {
        dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch(error => { console.log(error)});
}

export const addLead = (lead) => dispatch => {
    axios.post(SERVER_URL, lead)
    .then(response => {
        dispatch({ type: ADD_LEAD, payload: response.data });
    })
    .catch(error => { console.log(error)});
}