import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../modules/mapReduxStateToProps';
import 'bootstrap/dist/css/bootstrap.min.css';

class IpLookupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredIp: '',
    }
  }
  handleChange = (event) => {
      this.setState({
        enteredIp: event.target.value
      })
  }

  clearInputs = (event) => {
    this.setState({
      enteredIp: '',
    })
  }

  handleSubmit = (event) => {
    this.props.dispatch({
      type: 'IP',
      ip: {
        enteredIp: this.state.enteredIp,
      },
    });
    this.clearInputs();
  }

  render() {
    const ipArray = this.props.reduxState.ipReducer.map((ip, index) => {
      return <div key={index} className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5>
              {ip.enteredIp}
            </h5>
          </div>
        </div>

      </div>
    })
    return (
      <div className="container">
        <div className="jumbotron jumbotron-ip">
          <h1>IP Lookup</h1>
        </div>
        <div className="input-group mb-3">
          <input
            value={this.state.enteredIp}
            className="input-group-text mr-1"
            placeholder="Enter IP"
            onChange={this.handleChange}
            data-name="ip" />
          <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
        </div>
        <div className="row">
          {ipArray}
        </div>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(IpLookupPage);