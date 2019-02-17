
export const deslugify = (slug) => {
    return slug.split("-").join(" ").split("_").join(" ");
}

export const ucfirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const apiErrorToAlerts = (error) => {
    let alerts = [];
    let alert_id = '', alert_message = '';

    for(let field in error.response.data){
        alert_id = field + "-error";
        alert_message = error.response.data[field];

        if(typeof alert_message == 'string') alert_message = error.response.data[field];
        else if (Array.isArray(alert_message) ) alert_message = ucfirst(deslugify(field)) + ": " + alert_message.join(' ').replace("This field ", "");
        
        alerts.push({id: alert_id, msg: alert_message, className:'alert alert-danger'});
    }

    return alerts;
}

