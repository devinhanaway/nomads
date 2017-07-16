
import React, { Component } from 'react';
import Requests from './NavComponents/connectionsRequests'
import {Icon, Dropdown} from 'semantic-ui-react'
import propTypes from 'react'
import {getConnections} from './actions'
import { connect } from 'react-redux'

//

import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Redirect} from 'react-router-dom'





export class Nav extends React.Component {
  state = {
    done: false,
    connections: [],
    isLoading: true
  };

  async componentWillMount(){
    // this.setState({isLoading: true})
    await this.props.getConnections()
    this.setState({isLoading: false})
    return true
  }





   logout = (e)=>{
    e.preventDefault()
    localStorage.removeItem("jwtToken")
    this.setState({done: true})
  }

  render() {
    console.log(this.props.currentConnections);
    // const Requests =(<Requests connections={this.props.connections}/>)
    const nav = (    <div className="ui secondary  menu">
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
            <Link className="item" onClick={this.logout} to="/landing">
              Logout
            </Link>
            <Link className="item" to="/profile">
              Profile
            </Link>
          </div>
          {!this.state.isLoading ? <Requests connections={this.props.connections}/>: null}
        </div>
      )
    return (
      <div>
        {this.state.done ? <Redirect to='/landing'/>: nav}
      </div>
    );
  }
}
Nav.propTypes={
  connections: React.PropTypes.array.isRequired,
  getConnections: React.PropTypes.func.isRequired
}
function mapStateToProps(state) {
  console.log(state);
  return{
    connections: state.currentConnections.connections
  }
}



export default connect(mapStateToProps, {getConnections})(Nav)
