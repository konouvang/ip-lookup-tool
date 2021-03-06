import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import IpLookupPage from '../IpLookupPage/IpLookupPage'
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <Route
        exact
        path="/"
        component={IpLookupPage}>
        </Route>
      </Router>
    );
  }
}

export default App;
