import React, { Component } from 'react';
import '../App.css';

import Image1 from './assets/img1.jpg'

import UserList from './UsersComponents/UserList'

import { connect } from 'react-redux'

import { getConnections } from './actions'

import Nav from './Nav'
import {
  Link
} from 'react-router-dom'


class User extends Component {
  componentWillMount(){
    this.setState({loading: true})
    console.log(this.props.currentConnections,"is this working over here?????? in my connections / users ");
    this.props.getConnections().then(()=>{
      this.setState({loading: false})
    })
    return true
  }

  render(){
    if(this.state.loading){
      return null
    }
    if (!this.props.currentConnections){
      return (<div>
         <Nav />
       <div>
       <span>You Don't Have Any Connections Yet, Tell you fellow Nomads to create an Account and Start mapping one another</span>
       <Link className="item" to="/searchusers">
         Add Conncetions
       </Link>
      </div>
         </div>)
    }
    if (this.props.currentConnections.length === 0 ){
      return (<div>
         <Nav />
         <div className="ui center aligned icon header container padding">
         <span>You Don't Have Any Connections Yet, Tell you fellow Nomads to create an Account and Start mapping one another</span>
         <Link className="item" to="/searchusers">
           Add Conncetions
         </Link>
        </div>

         </div>)
    }


    // console.log(this.props);
    return(
      <div className="ui container">
        <Nav />
      <UserList currentConnections={this.props.currentConnections} />
        {/* <div className="well container row">
          <img src={Image1} className="col-md-4"></img>
          <h3 className="col-md-8">Title</h3>
          <h5>Post Content</h5>
          <button className="btn btn-info">Edit Post</button>
        </div> */}
      </div>
    )
  }
}

User.propTypes = {
  currentConnections: React.PropTypes.array.isRequired,
  getConnections: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return{
    currentConnections: state.currentConnections.connections
  }
}

export default connect(mapStateToProps, { getConnections })(User)
