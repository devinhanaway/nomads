import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Landing from './components/Landing'

class App extends Component {
  render() {


  //mapStateToProp

    return (
      <div >
        {/* <Landing/> */}
        {/* <div className="ui three item menu container">
        <Link className="item" to="/landing">Home</Link>
        <Link className="item" to="/user">Users</Link>
        <Link className="item" to="/simplemap">SimpleMap</Link>
        <Link className="item" to="/newuser">Signup</Link>
        </div> */}

      </div>

    );
  }
}

export default App;
