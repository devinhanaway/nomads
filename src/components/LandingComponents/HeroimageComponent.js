import React, { Component } from 'react';
import '../../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Modal} from '../actions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'




const myTitle =['Stay in touch with the people you actually care about','Explore, Travel, Connect','Share and expand your network with your closest friends', 'Become a Nomad']


export class HeroImage extends Component{
  constructor(){
    super()
    this.state = {
      title: "Explore, Travel, Connect",
      setModal:  ()=>{this.props.Modal("SOCIAL_SIGN_IN")}
    }
  }

  // handleClick = (e) =>{
  //   let modal = "SOCIAL_SIGN_IN"
  //   console.log(modal);
  //   e.preventDefault();
  //   setModal(modal)
  // }


  render(){

    setTimeout(()=>{
      const i = Math.floor(Math.random() * 4)
      this.setState({title: myTitle[i]})
    }, 2000)

    return(
      <div className="landing ui grid">
        <div className="row darken fixed">
          <div className="ui mini image left floated aligned four wide column top">
            <Link to="/landing">

            <img className="ui image mini" src="../../../images/Nomads_logo_v1.png" />
            </Link>
          </div>
        <div className="right floated left aligned four wide column top">
        <div className="ui">
          <Link className="right" to="/newuser">Signup</Link>
        </div>
        </div>
      </div>


      <div className="tint row padding-ten">
          <h1 className="landing-title">{this.state.title}</h1>
      </div>
      <div className="tint row">
  <Link className="landing-title ui button" to="/login">Login</Link>
    {/* <a className="landing-title ui button" onClick={this.state.setModal}>Login</a> */}


      </div>

      {/* <img className="img-responsive landing-title arrow" src={"./arrow.png"} alt="Hello"/> */}

      </div>
    )
  }
}
export default connect(null, {Modal})(HeroImage)
