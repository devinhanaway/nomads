import React from 'react';

export default function UserCard({user}){
  return (
    <div className="ui card">
      <div className="image">
        <img src={user.image} alt="Insert funny image"/>
      </div>
      <div className="content">
        <div className="header">{user.title}</div>
      <div className="content">Loction: {user.location}</div>
    <div className="email">Email: {user.email}</div>
      </div>
      <button>Add Nomad</button>
    </div>
  )
}

UserCard.propTypes = {
  user: React.PropTypes.object.isRequired
}
