/* Displays Leads in table */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';

export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLeads: PropTypes.func
    }

    componentDidMount(){
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
            <h2>Leads</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Note</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    { this.props.leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.note}</td>
                            <td>
                                <button onClick={this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
