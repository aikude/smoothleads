import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/auth';
import { clearAlerts } from '../../actions/alerts';

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    static propTypes = {
        loginUser: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    // Set the respective state property for any updated field
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    // Handle form submission
    onSubmit = e => {
        e.preventDefault();
        this.props.clearAlerts();

        const { username, password } = this.state;
        this.props.loginUser(username, password);
    };
  
    render() {
        //console.log('Login:', this.props);
        if(this.props.isAuthenticated) { return <Redirect to="/" />; }
        
        const { username, password } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" className="form-control" name="username" id="username" 
                    onChange={this.onChange} value={username} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" 
                    onChange={this.onChange} value={password} />
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={this.onSubmit}>Login</button>
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
                </form>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated // We could use "auth: state.auth" instead, if we'll need more state props in Login form
});

export default connect(mapStateToProps, { loginUser, clearAlerts })(Login);
