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
      zip: '',
      invalid: ''
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
    this.ipDoesNotExist();
  }

  apiCall = (event) => {
    //this ternary is needed because by default, http://ip-api.com/json/ returns your ip server info
    const httpString = this.state.enteredIp.length ? (
      String('http://ip-api.com/json/' + this.state.enteredIp)
    ) : String('http://ip-api.com/json/erroripdoesnotexist');
    //end of function that was commented
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
    // this.ipDoesNotExist();
};

  ipDoesNotExist = (event) => {
    if (this.state.city === undefined) {
      this.setState({
        invalid: 'This IP Address does not exist'
      })
    } else {
      this.setState({
        invalid: '',
      })
    }
  }


  render() {
    const displayIpInfo = this.state.city ? (
      <>
      <h2>IP Address: {this.state.query}</h2>
      <h2>City: {this.state.city}</h2>
      <h2>Country: {this.state.country}</h2>
      <h2>Zip: {this.state.zip}</h2>
      <h2>Timezone: {this.state.timezone}</h2>
      </>
    ) : (
      <>
      <h2>{this.state.invalid}</h2>
      </>
    )
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
          {displayIpInfo}
        </div>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(IpLookupPage);