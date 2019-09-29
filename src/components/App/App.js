import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import IpLookupPage from '../IpLookupPage/IpLookupPage'
import './App.css';
import API from '../Ip-api/Ip-api';

class App extends Component {
  render(){
    return (
      <Router>
        <Route
        exact
        path="/"
        component={IpLookupPage}>
        </Route>

        <Route
        exact
        path="/api"
        component={API}>
        </Route>

      </Router>
    );
  }
}

export default App;
