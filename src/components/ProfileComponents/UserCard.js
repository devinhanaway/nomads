import React from 'react';

export default function UserCard({currentUser}){
  return (
    <div className="ui center aligned icon header container padding">
      <div className="ui center aligned icon header container padding">
        <img className="ui Massive centered image" src={currentUser.image} alt="Insert funny image"/>
      </div>
      <div className="content">
        <div className="header">{currentUser.title}</div>
      <div className="content">Loction: {currentUser.location}</div>
    <div className="email">Email: {currentUser.email}</div>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  currentUser: React.PropTypes.object.isRequired
}
