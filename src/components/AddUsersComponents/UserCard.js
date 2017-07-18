import React from 'react';

import { addRequest } from '../actions'

import { connect } from 'react-redux'



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
      <div className="image">
        <img src={this.props.user.image} alt="Insert funny image"/>
      </div>
      <div className="content">
        <div className="header">{this.props.user.title}</div>
      <div className="content">Currently Living: {this.props.user.location}</div>
    <div className="email">Email: {this.props.user.email}</div>
      </div>
      {!this.state.done && <button disabled={this.state.done} onClick={this.handleClick}>Add Nomad</button>}
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
