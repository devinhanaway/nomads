import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'
import GoogleMapReact from 'google-map-react';




export default class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <div>
        <Nav />
        <div style={{width: '100%', height: '400px'}}>
          <h1>Hello Simple Map</h1>
           <GoogleMapReact
            resetBoundsOnResize
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            bootstrapURLKeys={{
    					key: 'AIzaSyCYZ_MHNl3DWZmf6GF4Y66oi4Rcki4gcrg'
    				}}
            >


          </GoogleMapReact>

        </div>
      </div>
    );
  }
}
