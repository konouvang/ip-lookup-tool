import React, { Component } from 'react';

class IpLookupPage extends Component {
    state = {
        ip: '',
    }

    handleChange = (e) => {
        this.setState({
            ip: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            ip: ''
        })
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="ip address" value={this.state.ip} name="batch"onChange={this.handleChange}/>
                <button>Submit</button>
        </form>
            </div>
        );
    }

}

export default IpLookupPage;