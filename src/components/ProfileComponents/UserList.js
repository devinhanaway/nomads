import React from 'react';
import UserCard from './UserCard'

export default function UserList({ currentUser }) {
  const emptyMessage = (
    <p>There are no users yet</p>
  )
  console.log();

  const userList = (
    <div className="ui four cards">
     <UserCard currentUser={currentUser} key={currentUser._id}/>
    </div>

  )
  return(
    <div>
      {currentUser.length === 0 ? emptyMessage : userList}
    </div>

  )
}

UserList.propTypes = {
  currentUser: React.PropTypes.object.isRequired
}
