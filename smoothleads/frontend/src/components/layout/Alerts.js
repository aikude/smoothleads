import React, { Fragment } from 'react'

const Alerts = ({alerts}) => {
    if(alerts && alerts.length){
        return (
            <Fragment>
                { alerts.map(alert => { return <div key={alert.id} className={alert.className} role="alert" >{alert.msg}</div>; }) }
            </Fragment>
        );
    }
    else { return ''; }
}

export default Alerts;