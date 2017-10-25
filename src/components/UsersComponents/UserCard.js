import React from 'react';

export default function UserCard({user}){
  return (
    <div className="ui stackable card">

      <div className="extra content">
        <div className="center floated author">
          <img className="ui tiny circular image"src={user.image} alt="Insert funny image"/>{user.title}
        </div>
      </div>

        <div className="content">
        <div className="content">location: {user.location}</div>
        <div className="email">Email: {user.email}</div>
    </div>

    </div>

  )
}

UserCard.propTypes = {
  user: React.PropTypes.object.isRequired
}
