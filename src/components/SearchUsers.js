import React, { Component } from 'react';
import '../App.css';

import Image1 from './assets/img1.jpg'

import UserList from './AddUsersComponents/UserList'

import { connect } from 'react-redux'

import { fetchUsers } from './actions'
// import { addConnection} from './actions'
import {
  Link
} from 'react-router-dom'

import Nav from './Nav'


class SearchUsers extends Component {

  constructor(){
    super()
    this.state = {
    isLoading: "pending",
    }
  }
   async componentWillMount(){
     console.log("is this ever running?");

      await this.props.fetchUsers()
      await this.setState({isLoading: false})

  }

  render(){

  //   if(this.state.isLoading === true || this.state.isLoading === "pending"){
  //     return(
  //     <div>
  //         {this.state.isLoading === false ? <Nav />: null}          <div className="ui center aligned icon header container padding">
  //         <span>You are the very first user on the site, congrats</span>
  //        </div>
  //      </div>
  //    )
  //  }else{
    return(
      <div className="ui container">
          {this.state.isLoading === false ? <Nav />: null}
      {this.state.isLoading === false ? <UserList  users={this.props.users}/>: null}
        {/* <div className="well container row">
          <img src={Image1} className="col-md-4"></img>
          <h3 className="col-md-8">Title</h3>
          <h5>Post Content</h5>
          <button className="btn btn-info">Edit Post</button>
        </div> */}
      </div>
    )
  // }
   }
}

SearchUsers.propTypes = {
  users: React.PropTypes.array.isRequired,
  fetchUsers: React.PropTypes.func.isRequired,
  // addConnection: React.PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return{
    users: state.users
  }
}

export default connect(mapStateToProps, { fetchUsers })(SearchUsers)
