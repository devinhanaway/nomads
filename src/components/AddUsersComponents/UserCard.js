import React from 'react';

import { addRequest } from '../actions'

import { connect } from 'react-redux'

import {Button,Trigger, Container,Grid, Divider, Dropdown, Popup, Label, Icon} from 'semantic-ui-react'




// console.log({user});
// const addUser = {user}
// console.log(addUser);
// const handleClick = (e) => {
//   e.preventDefault()
//   console.log({user});
//   const currentUser = {
//     id: {user.id},
//     image: {user.image},
//     title: {user.title},
//     location: {user.location},
//     email: {user.email},
//   }
//   this.addRequest(addUser)
// }
class UserCard extends React.Component {
  componentDidMount(){
    this.props.user
    this.props.addRequest
  }
  state={
    done: false,
    errors: {}
  }


  handleClick = (e) => {
    e.preventDefault()
    console.log(this.props.user);
    this.props.addRequest(this.props.user)
    .then(
      () => {this.setState({done: true})},
      (err)=> err.response.json().then((error)=>
      {
        console.log(error);
        console.log(error.errors.global);
        this.setState({errors: { global: error.errors.global}})
        console.log(this.state.errors);
    })
    )
  }


render(){

  return (

    <div className="ui card">
           {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}
      <div className="extra content">
          <div className="center floated author">
            <img className="padding ui tiny circular image" src={this.props.user.image} alt="Insert funny image"/>{this.props.user.title}

          </div>

      </div>
      <div className="content">
        {/* <div className="header">{this.props.user.title}</div> */}
        <div className="content">Currently Living: {this.props.user.location}</div>
        <div className="email">Email:     {this.props.user.email}</div>
      </div>
      {/* <div className="ui top attached button" tabindex="0"onHover="mouse"      disabled={this.state.done} onClick={this.handleClick}> */}
        {!this.state.done &&
            <div className="ui top attached button" tabindex="0"onHover="mouse"      disabled={this.state.done} onClick={this.handleClick}>Add</div>
        }

  </div>
  )
// }
}
}

UserCard.propTypes = {
  user: React.PropTypes.object.isRequired,
  addRequest: React.PropTypes.func.isRequired
}
// function mapStateToProps(state) {
//   return{
//     users: state.users
//   }
// }

export default connect(null, { addRequest })(UserCard)
