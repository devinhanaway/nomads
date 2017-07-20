import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'


class App extends Component {

  render() {



  //mapStateToProp

    return (
      <MuiThemeProvider>
      <div >
        {/* <Redirect to="./landing"/> */}
        {/* <Landing/> */}
        {/* <div className="ui three item menu container">
        <Link className="item" to="/landing">Home</Link>
        <Link className="item" to="/user">Users</Link>
        <Link className="item" to="/simplemap">SimpleMap</Link>
        <Link className="item" to="/newuser">Signup</Link>
        </div> */}

      </div>
    </MuiThemeProvider>

    );
  }
}

export default App;
