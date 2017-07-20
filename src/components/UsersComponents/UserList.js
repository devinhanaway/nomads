import React from 'react';
import UserCard from './UserCard'

export default function UserList({ currentConnections }) {
  const emptyMessage = (
    <p>There are no currentConnections yet</p>
  )

  const userList = (
    <div className="ui four cards">
      {currentConnections.connections.map(user => <UserCard user={user} key={user._id}/>)}
    </div>

  )
  return(
    <div>
      {currentConnections.connections.length === 0 ? emptyMessage : userList}
    </div>

  )
}

UserList.propTypes = {
  currentConnections: React.PropTypes.array.isRequired
}
