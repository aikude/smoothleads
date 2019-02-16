import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';

class App extends Component {
    render() {
        const { alerts } = this.props;
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <Alerts alerts={alerts} />
                    <Dashboard />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    alerts: state.alerts.alerts
});

export default connect(mapStateToProps)(App);