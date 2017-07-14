
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




export default class Nav extends React.Component {
  static defaultProps = {

  };

  render() {
    return (
      <div>
        <div className="ui secondary  menu">
          <Link className="item" to="/simplemap">
            Your Map
          </Link>
          <Link className="item" to="/searchusers">
            Add Conncetions
          </Link>
          <Link className="item" to="/user">
            Your Nomads
          </Link>

          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
              </div>
            </div>
            <Link className="item" to="/landing">
              Logout
            </Link>
            <Link className="item" to="/profile">
              Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
