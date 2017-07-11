import React, { Component } from 'react';
import '../App.css';

import Image1 from './assets/img1.jpg'

import UserList from './UsersComponents/UserList'

import { connect } from 'react-redux'

import { fetchUsers} from './actions'

class User extends Component {
  componentDidMount(){
    this.props.fetchUsers()
  }

  render(){
    return(
      <div className="ui container">
        <UserList users={this.props.users} />
      </div>
    )
  }
}

User.propTypes = {
  users: React.PropTypes.array.isRequired,
  fetchUsers: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return{
    users: state.users
  }
}

export default connect(mapStateToProps, { fetchUsers })(User)
