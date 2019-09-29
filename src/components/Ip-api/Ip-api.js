import React, { Component } from 'react'
import axios from 'axios'

class API extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
    };

    componentDidMount() {
        const httpString = String('http://ip-api.com/json/' + this.props.enteredIp);
        console.log(httpString);
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
            console.log(res.data);
            console.log(this.state.city);
            console.log(this.props.enteredIp);
        }).catch((err) => {
            console.log(err);
        });
    };

    render() {
        const { ip } = this.state;
        if (ip) {
            return (
                <div>
                    <br /><br />
                    <h2 style={{ textAlign: 'center' }}>{this.state.ip}</h2>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        };
    };
};

export default API;