import React, { Component } from 'react';
import '../../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const myTitle =['Stay in touch with the people you actually care about','Explore, Travel, Connect','Share and expand your network with your closest friends', 'Become a Nomad']


export default class HeroImage extends Component{
  constructor(){
    super()
    this.state = {
      title: "Explore, Travel, Connect"
    }
  }
  render(){

    setTimeout(()=>{
      const i = Math.floor(Math.random() * 4)
      this.setState({title: myTitle[i]})
    }, 2000)

    return(
      <div className="landing ui grid">
        <div className="row">
          <h1 className="landing-title">{this.state.title}</h1>
      </div>
      <div className="row">
      <Link className="landing-title ui button" to="/login">Login</Link>
    <Link className="landing-title ui button" to="/newuser">Signup</Link>
      </div>
      {/* <img className="img-responsive landing-title arrow" src={"./arrow.png"} alt="Hello"/> */}

      </div>
    )
  }
}
