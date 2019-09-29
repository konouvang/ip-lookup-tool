import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../modules/mapReduxStateToProps';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


class IpLookupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredIp: '',
      as: '',
      city: '',
      country: '',
      countryCode: '',
      isp: '',
      lat: '',
      lon: '',
      org: '',
      query: '',
      region: '',
      regionName: '',
      status: '',
      timezone: '',
      zip: ''
    }
  }
  handleChange = (event) => {
      this.setState({
        enteredIp: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      enteredIp: event.target.value
    })
    this.apiCall();
  }

  apiCall = (event) => {
    const httpString = String('http://ip-api.com/json/' + this.state.enteredIp);
    axios.get(httpString).then((res) => {
        this.setState({
            as: res.data.as,
            city: res.data.city,
            country: res.data.country,
            countryCode: res.data.countryCode,
            isp: res.data.isp,
            lat: res.data.lat,
            lon: res.data.lon,
            org: res.data.org,
            query: res.data.query,
            region: res.data.region,
            regionName: res.data.regionName,
            status: res.data.status,
            timezone: res.data.timezone,
            zip: res.data.zip
        });
    }).catch((err) => {
        console.log(err);
    });
};

  render() {
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
        <div className="container">
          {/* {ipArray} */}
          {/* <API enteredIp={this.state.enteredIp} /> */}
          <h2>City: {this.state.city}</h2>
          <h2>Country: {this.state.country}</h2>
          <h2>Zip: {this.state.zip}</h2>
          <h2>Timezone: {this.state.timezone}</h2>
        </div>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(IpLookupPage);