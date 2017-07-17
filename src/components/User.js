import React, { Component } from 'react';
import '../App.css';

import Image1 from './assets/img1.jpg'

import UserList from './UsersComponents/UserList'

import { connect } from 'react-redux'

import { getConnections } from './actions'

import Nav from './Nav'


class User extends Component {
  componentWillMount(){
    this.props.getConnections()
    return true
  }

  render(){
    if (!this.props.currentConnections){
      return (<div>Waiting for users to load</div>)
    }
    if (this.props.currentConnections.length === 0 ){
      return (<div>Waiting for users to load</div>)
    }


    console.log(this.props);
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
