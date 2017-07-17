import React, { Component }  from 'react'
import { render } from 'react-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Nav from './Nav'

import { connect } from 'react-redux'

import { getConnections } from './actions'

import { getLatLng } from './cleanLocation'

class MapNetwork extends Component {
  state = {
        isLoading: true
  }
  componentWillMount(){
    this.props.getConnections()
    console.log(this.props.currentConnections);

  }
  constructor() {
    super()
    this.state = {
      person:{
        lat: 51.505,
        lng: -0.09,
        zoom: 3
      },
      person2:{
        lat: 41.505,
        lng: -0.09,
      },
      person3:{
        lat: 31.505,
        lng: -0.09,
      }
    }
  }

  render() {

      if (!this.props.currentConnections){
        return (<div>Waiting for users to load</div>)
      }
      if (this.props.currentConnections.length === 0 ){
        return (<div>Waiting for users to load</div>)
      }
      console.log(this.props.currentConnections);

      // const test = this.props.currentConnections.forEach(data=>{
      //   console.log(data);
      //   this.props.getLatLng(data.location).then(item=>{
      //      console.log(item);
      // })
      //
      // })

      // const test = this.props.currentConnections.forEach(data=>{
      //   console.log(data);
      //   getLatLng(data.location)

    console.log(this.props);
    const position = [this.state.person.lat, this.state.person.lng];
    const position2 = [this.state.person2.lat, this.state.person2.lng];
    const position3 = [this.state.person3.lat, this.state.person3.lng];

    return (
      <div >
        <Nav/>
        <Map className="leaflet-container" center={position} zoom={this.state.person.zoom}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
              <Marker position={position}>
                <Popup>
                  <span>{this.props.currentConnections[1].title}<br/> Not Denver</span>
                </Popup>
              </Marker>
              <Marker position={position2}>
                <Popup>
                  <span>{this.props.currentConnections[0].title}<br/> Not Denver.</span>
                </Popup>
              </Marker>
              <Marker position={position3}>
                <Popup>
                  <span>Random Dude <br/> something.</span>
                </Popup>
              </Marker>
            </Map>
    </div>
    );
  }
}

MapNetwork.propTypes = {
  currentConnections: React.PropTypes.array.isRequired,
  getConnections: React.PropTypes.func.isRequired
  // getLatLng: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return{
    currentConnections: state.currentConnections.connections
  }
}

export default connect(mapStateToProps, { getConnections, getLatLng })(MapNetwork)
