import React from 'react';

export default function UserCard({user}){
  return (
    <div className="ui stackable card">
      <div className="image">
        <img src={user.image} alt="Insert funny image"/>
      </div>
      <div className="content">
        <div className="header">{user.title}</div>
      <div className="content">location: {user.location}</div>
    <div className="email">Email: {user.email}</div>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  user: React.PropTypes.object.isRequired
}
