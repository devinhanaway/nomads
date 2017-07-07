import React, { Component } from 'react';
import '../../App.css';




export default class LandingComponentTwo extends Component{

  render(){

    return(
      <div className="landing2">
        <h1 className=" ui center aligned icon header">Why Join Nomads?</h1>
      <div className="ui three column grid container">
          <div className="column">
            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/peopleMap.jpg"/>
            <h2>Share and Expand your network with the people you are closest with.</h2>
          <h3>Be intentional about who you connect with, your also making an introduction of them to your other friends</h3>
             </div>
          </div>
          <div className="column">
            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/connection.jpg"/>
              <h2>Break the chains of social media, without loosing contact with those you car about most.</h2>
              <h3>use text message, email and what's app, like you already do anyways. To stay in touch untill your next visit</h3>
             </div>
          </div>
          <div className="column">

            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/globalCitizen.jpg"/>
              <h2>Map your immediate connections, and friends of friends, across the globe</h2>
              <h3> Create meaning behind your next adventure, and become a global citizen </h3>
             </div>
          </div>
        </div>

      </div>

    )
  }
}
