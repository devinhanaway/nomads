import React, { Component } from 'react';
import '../App.css';

import Image1 from './assets/img1.jpg'

import UserList from './ProfileComponents/UserList'

import { connect } from 'react-redux'

import { current } from './actions'

import Nav from './Nav'

const testItem = localStorage.getItem('jwtToken');


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: "pending",
    }
  }
  async componentWillMount(){
    console.log("why does this work here?????");
    await this.props.current()
     this.setState({isLoading: false})
     return true
  }


  render(){

    if(this.state.isLoading === true || this.state.isLoading === "pending"){
      return(
      <div>
          {/* <Nav /> */}
          <div className="ui center aligned icon header container padding">
          <span>Making sure your password and information is protected is key for us, sorry for the delay</span>
         </div>
       </div>
     )
   } else{
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
}

Profile.propTypes = {
  currentUser: React.PropTypes.object.isRequired,
  current: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return{
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { current })(Profile)
