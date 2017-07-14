import React from 'react';
import UserCard from './UserCard'

export default function UserList({ users }) {
  const emptyMessage = (
    <p>There are no users yet</p>
  )

  const userList = (
    <div className="ui four cards">
      {users.map(user => <UserCard user={user} key={user._id}/>)}
    </div>

  )
  return(
    <div>
      {users.length === 0 ? emptyMessage : userList}
    </div>

  )
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired
}
