
import React, { Component } from 'react';
import Requests from './NavComponents/connectionsRequests'
import {Icon, Dropdown} from 'semantic-ui-react'
import propTypes from 'react'
import {getRequests} from './actions'
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
    constructor(){
      super()
    this.state = {
      done: false,
      connections: [],
      isLoading: true,
      loadRequests: "true",
      requests:[]
    }
  }

 componentDidMount(){
    this.setState({isLoading: true})
    this.props.getRequests().then(data=>
      {
        console.log("What are my requests?????",data);
        if (data.requests === null || data.requests.requests.length === 0){
        this.setState({loadRequests: true})
      }else{
        this.setState({requests: data.requests})
        console.log(this.state.requests);
        this.setState({loadRequests: false})
      }
    })
  }





   logout = (e)=>{
    e.preventDefault()
    localStorage.removeItem("jwtToken")
    this.setState({done: true})
  }

  render() {
    if(this.state.loadRequests === true){
      const initialNav = (
        <div className="ui secondary  menu">
              <Link className="item" to="/map">
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
            </div>
      )
      return (
        <div>
          {this.state.done ? <Redirect to='/landing'/>: initialNav}
        </div>)
    } else if(this.state.requests === null ||this.state.requests.length === 0 ){
      const initialNav = (
        <div className="ui secondary  menu">
              <Link className="item" to="/map">
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
            </div>
      )
      return (
        <div>
          {this.state.done ? <Redirect to='/landing'/>: initialNav}
        </div>

      )
    }else{

      console.log(this.state.requests.requests);

    // const Requests =(<Requests connections={this.props.connections}/>)
    const nav = (    <div className="ui secondary  menu">
          <Link className="item" to="/map">
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
          {this.state.loadRequests === false ? <Requests requests={this.state.requests.requests}/>: null}
        </div>
      )
    return (
      <div>
        {this.state.done ? <Redirect to='/landing'/>: nav}
      </div>
    );
  }
  }
}
Nav.propTypes={
  requests: React.PropTypes.array.isRequired,
  getRequests: React.PropTypes.func.isRequired
}

Nav.defaultProps={
  requests: React.PropTypes.array
}

function mapStateToProps(state) {
  console.log(state);
  return{
    requests: state.requestConnections.requests
  }
}



// export default connect(null, {getRequests})(Nav)
export default connect(mapStateToProps, {getRequests})(Nav)
