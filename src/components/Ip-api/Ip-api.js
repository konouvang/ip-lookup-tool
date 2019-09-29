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
            JSON.stringify(res.data);
            // this.setState({
            //     ip: res.data
            // });
            console.log(res.data);
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