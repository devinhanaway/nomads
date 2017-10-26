
import React, { Component } from 'react';
import Requests from './NavComponents/connectionsRequests'
import BaseNav from './NavComponents/baseNav'
import {Icon, Dropdown} from 'semantic-ui-react'
import propTypes from 'react'
// import {getRequests} from './actions'
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
    // this.setState({isLoading: true})
    // this.props.getRequests().then(data=>
    //   {
    //     console.log("What are my requests?????",data);
    //     if (data.requests === null || data.requests.requests.length === 0){
    //     this.setState({loadRequests: true})
    //   }else{
    //     this.setState({requests: data.requests})
    //     console.log(this.state.requests);
    //     this.setState({loadRequests: false})
    //   }
    // })
  }





   logout = (e)=>{
    e.preventDefault()
    localStorage.removeItem("jwtToken")
    this.setState({done: true})
  }

  render() {

      console.log(this.state.requests.requests);

    // const Requests =(<Requests connections={this.props.connections}/>)
    const nav = (
      <div className="ui secondary menu">
        {/* <div class="ui left simple dropdown">
    <i className="dropdown icon"></i>
  <div className="default text">Menu
  <div className="menu">
      <div className="item">
      <Link className="item " to="/map">Network</Link>
    </div>
    <div className="item">
      <Link className="item" to="/searchusers">
        Add Connections
      </Link>
    </div>
    <div className="item">
      <Link className="item" to="/user">
        Your Nomads
      </Link>
    </div>
    </div>
    </div>
  </div> */}
  <div className="ui mini image left floated aligned four wide column top">
    <Link to="/landing">
    <img className="ui image mini" src="../../../images/Nomads_logo_v1.png" />
    </Link>
  </div>
  <div className="item">
    <div className="ui left simple dropdown absolute">
      <div className="absolute">Menu
      <i className="dropdown icon"></i></div>
      <div className="menu absolute">
        <Link className="item " to="/map">Network</Link>
        <Link className="item" to="/user">
          Your Nomads
        </Link>

        <Link className="item absolute" to="/searchusers"><i className="add square icon"></i>
          Add Connections
        </Link>
      </div>
    </div>
  </div>




          <div className="right menu">
            <div className="item">
              {/* <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
              </div> */}
            </div>
            <BaseNav onHover="mouse" className="item notifications" />

            <Link className="item" to="/profile">
              Profile
            </Link>

            <Link className="item" onClick={this.logout} to="/landing">
              Logout
            </Link>
          </div>





          {/* {this.state.loadRequests === false ? <BaseNav />: null} */}
          {/* {this.state.loadRequests === false ? <Requests requests={this.state.requests.requests}/>: null} */}

        </div>
      )
    return (
      <div>
        {this.state.done ? <Redirect to='/landing'/>: nav}
      </div>
    );
  // }
  }
}
// Nav.propTypes={
//   requests: React.PropTypes.array.isRequired,
//   getRequests: React.PropTypes.func.isRequired
// }
//
// Nav.defaultProps={
//   requests: React.PropTypes.array
// }
//
// function mapStateToProps(state) {
//   console.log(state);
//   return{
//     requests: state.requestConnections.requests
//   }
// }



// export default connect(null, {getRequests})(Nav)
export default connect(null)(Nav)
