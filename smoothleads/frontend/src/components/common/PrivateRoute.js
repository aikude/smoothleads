import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// A Route wrapper that adds authentication checks
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    //console.log('PrivDash', auth);
    return <Route {...rest} 
        render={props => {
            if(auth.isLoading) { return <h2>Loading...</h2>; }
            else if(auth.isAuthenticated) { return <Component {...props} />; }
            else { return <div className="card card-body mt-3 text-center">Log in Required</div>; }
        }}
    />
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);