import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import Register from './accounts/Register';
import Login from './accounts/Login';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';


class App extends Component {
    componentDidMount(){
        this.props.loadUser();
        //console.log(this.props);
    }

    render() {
        const { alerts } = this.props;
        return (
            <Router>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Alerts alerts={alerts} />
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                   </div>
                </Fragment>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    alerts: state.alerts.alerts
});

export default connect(mapStateToProps, { loadUser })(App);