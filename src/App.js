import React, { Component } from 'react';
import './App.css';

import User from './components/User'
// import HeroImage from './components/HeroimageComponent'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div >

        <div className="ui four item menu container">
        <Link className="item" to="/landing">Home</Link>
        <Link className="item" to="/user">Users</Link>
        <Link className="item" to="/simplemap">SimpleMap</Link>
        <Link className="item" to="/newuser">Signup</Link>
        </div>

        {/* <h1 className="ui header">Nomads</h1>
        <h1 className="ui header"><small>Maps your close network, and expand it using 2nd degree conncetions </small></h1> */}
      {/* <HeroImage/> */}
      </div>

    );
  }
}

export default App;
