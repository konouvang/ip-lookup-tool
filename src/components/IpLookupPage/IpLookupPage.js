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

  // clearInputs = (event) => {
  //   this.setState({
  //     enteredIp: '',
  //   })
  // }

  handleSubmit = (event) => {
    // this.props.dispatch({
    //   type: 'IP',
    //   ip: {
    //     enteredIp: this.state.enteredIp,
    //   },
    // });
    // this.clearInputs();
    // this.props.history.push('/api');

    /// just setting state without reducer
    event.preventDefault();
    this.setState({
      enteredIp: event.target.value
    })
    this.apiCall();
    console.log(this.state.enteredIp);
  }

  apiCall = (event) => {
    const httpString = String('http://ip-api.com/json/' + this.state.enteredIp);
    axios.get(httpString).then((res) => {
        // JSON.stringify(res.data);
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
        console.log(httpString);
        console.log(res.data);
        console.log(this.state.city);
        // console.log(this.props.enteredIp);
    }).catch((err) => {
        console.log(err);
    });
};

  render() {
    // const ipArray = this.props.reduxState.ipReducer.map((ip, index) => {
    //   return <div key={index} className="col-md-3">
    //     <div className="card">
    //       <div className="card-body">
    //         <h5>
    //           {ip.enteredIp}
    //         </h5>
    //       </div>
    //     </div>
    //    </div>
    //  })
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