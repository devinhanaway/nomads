import React, { Component } from 'react';
import '../../App.css';




export default class LandingComponentTwo extends Component{

  render(){

    return(
      <div className="landing2">
        <h1 className=" ui center aligned icon header">Why Join Nomads?</h1>
      <div className="ui three column grid stackable">
          <div className="column">
            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/peopleMap.jpg"/>
            <h2>Expand your network.</h2>
          <h3>Be intentional about who you connect with, your also making an introduction of them to your other friends</h3>
             </div>
          </div>
          <div className="column">

            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/globalCitizen.jpg"/>
            <h2>One Globe | One People</h2>
          <h3>Create meaning behind your next adventure, and become a global citizen. Use the map to connect with mutual connections.</h3>
             </div>
          </div>
          <div className="column">
            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/connection.jpg"/>
            <h2>Break the chains of social media</h2>
          <h3>Use text, email and whatsapp, like you already do, to stay in touch. Use nomads to keep track untill your next visit</h3>
             </div>
          </div>

        </div>

      </div>

    )
  }
}
