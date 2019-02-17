import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/auth';
import { clearAlerts, createAlert } from '../../actions/alerts';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    static propTypes = {
        registerUser: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.clearAlerts();

        const { username, email, password, password2 } = this.state;
        
        if(password !== password2) this.props.createAlert("Passwords do not match.");
        else {
            const user = { username, email, password };
            this.props.registerUser(user);
        }
    };
  
    render() {
        if(this.props.isAuthenticated) { return <Redirect to="/" />; }
        
        const { username, email, password, password2 } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                <h2>Register</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" className="form-control" name="username" id="username" 
                    onChange={this.onChange} value={username} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" 
                    placeholder="name@example.com" onChange={this.onChange} value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" 
                    onChange={this.onChange} value={password} />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Password</label>
                    <input type="password" className="form-control" name="password2" id="password2" 
                    onChange={this.onChange} value={password2} />
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={this.onSubmit}>Register</button>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
                </form>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated // Can use "auth: state.auth" if we'll need more state props in Login form
});

export default connect(mapStateToProps, { registerUser, clearAlerts, createAlert })(Register);
