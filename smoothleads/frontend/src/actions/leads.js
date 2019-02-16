import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, CREATE_ALERTS } from './types';
import { SERVER_URL } from '../constants';
import { apiErrorToAlerts } from '../helpers';

export const getLeads = () => dispatch => {
    axios.get(SERVER_URL)
    .then(response => {
        dispatch({ type: GET_LEADS, payload: response.data });
    })
    .catch(error => { 
        const alerts = apiErrorToAlerts(error);
        dispatch({ type: CREATE_ALERTS, payload: alerts });
    });
}

export const deleteLead = (id) => dispatch => {
    axios.delete(`${SERVER_URL}${id}/`)
    .then(response => {
        //dispatch(createAlerts([{id: 'lead-delete-success', msg: 'Lead Deleted!', className:'alert alert-success'}]));
        dispatch({ type: CREATE_ALERTS, payload: [{id: 'lead-delete-success', msg: 'Lead Deleted!', className:'alert alert-success'}] });
        dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch(error => { console.log(error)});
}

export const addLead = (lead) => dispatch => {
    axios.post(SERVER_URL, lead)
    .then(response => {
        dispatch({ type: CREATE_ALERTS, payload: [{id: 'lead-add-success', msg: 'New Lead Added!', className:'alert alert-success'}] });
        dispatch({ type: ADD_LEAD, payload: response.data });
    })
    .catch(error => {
        const alerts = apiErrorToAlerts(error);
        dispatch({ type: CREATE_ALERTS, payload: alerts });
    });
}