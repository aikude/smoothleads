import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';
import { clearAlerts } from '../../actions/alerts';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    note: ''
  }

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };
  
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.clearAlerts();

    const { name, email, note } = this.state;
    const lead = { name, email, note };
    this.props.addLead(lead);
  };

  render() {
    const { name, email, note } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" name="name" id="name" 
              placeholder="Enter name" onChange={this.onChange} value={name} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" name="email" id="email" 
              placeholder="name@example.com" onChange={this.onChange} value={email} />
          </div>
          <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea className="form-control" name="note" id="note" rows="4" 
              onChange={this.onChange} value={note}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onSubmit={this.onSubmit}>Add Lead</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { clearAlerts, addLead })(Form);
