import React, { Component } from 'react';
import '../../App.css';




export default class LandingComponentThree extends Component{

  render(){

    return(

      <div className="padding ui">
        <h1 className=" ui center aligned icon header">Stay in touch with the people you care about</h1>
      <h4 className=" ui center aligned icon header">Break the chains of social media</h4>

    <div className="landing3 ui segment container">
        <div className="ui column grid">
      <div className="six wide column social segment right">
        <img className="ui medium centered image" src="../../../images/uncomplicate.jpg"/>
      <h4>Social Media has become fludded with unneccasaery posts, advertisments, bots, and friends you were really never even friends with. Nomads is a way for you to map, and easily keep track of your closest friends. So the next time someone moves, changes phone numbers, or discovers a new passion, you can know exactly how to reach out and stay in contact with them, without all the BS of a social medial platform</h4>

      </div>


    </div>
      </div>


      </div>
    )
  }
}
