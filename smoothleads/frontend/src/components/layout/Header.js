import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/auth';

export class Header extends Component {
  static propType = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const navsets = {
        loggedIn: [{title: 'Log Out', route: 'logout'}],
        loggedOut: [{title: 'Register', route: 'register'}, {title: 'Log In', route: 'login'}],
    }
    let navs = navsets.loggedOut;
    if(isAuthenticated) navs = navsets.loggedIn;

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
              <a className="navbar-brand" href="/">Smooth Leads App</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    { user ? <span className="navbar-text mr-3">Welcome {user.username}</span> : ''}
                    {
                      navs.map((nav, i) => (
                      nav.route == 'logout'
                      ?
                      <button key={i} onClick={this.props.logoutUser} className="nav-link btn btn-primary btn-sm text-light" >
                        {nav.title}
                      </button>
                      :
                      <li key={i} className="nav-item">
                        <Link to={nav.route} className="nav-link">{nav.title}</Link>
                      </li>
                      )) 
                    }
                  </ul>
              </div>
          </div>
        </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Header);
