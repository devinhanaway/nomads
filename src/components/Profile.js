import React, { Component } from 'react';
import '../App.css';

import Image1 from './assets/img1.jpg'

import UserList from './ProfileComponents/UserList'

import { connect } from 'react-redux'

import { current } from './actions'

import Nav from './Nav'
const testItem = "5968eaa9aea75900118caa84"


class Profile extends Component {
  componentDidMount(){
    this.props.current(testItem)
  }


  render(){
    // console.log(this.props.current(testItem));
    console.log(this.props.currentUser);
    console.log(this.props);
    console.log("jknwefkjwnfjkn wknewclkwenklwn lkendwleknf");
    return(
      <div className="ui container">
        <Nav />
      <UserList currentUser={this.props.currentUser} />
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

Profile.propTypes = {
  currentUser: React.PropTypes.object.isRequired,
  current: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return{
    currentUser: state.users
  }
}

export default connect(mapStateToProps, { current })(Profile)
