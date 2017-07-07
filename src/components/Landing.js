import React, { Component } from 'react';
import '../App.css';

import HeroImage from './LandingComponents/HeroimageComponent'
import LandingComponentTwo from './LandingComponents/LandingComponentTwo'
import LandingComponentThree from './LandingComponents/LandingComponentThree'
import LandingComponentFour from './LandingComponents/LandingComponentFour'

class Landing extends Component {


  render(){
    return(
      <div>
        <HeroImage />
        <LandingComponentTwo/>
        <LandingComponentThree/>
        <LandingComponentFour/>

        </div>
    )
  }
}

export default Landing;
