import React, { Component }  from 'react'
import { render } from 'react-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Nav from './Nav'

import { connect } from 'react-redux'

import { getConnections } from './actions'

import { getLatLng } from './cleanLocation'

class MapNetwork extends Component {
  constructor() {
    super()
    this.state = {
      zoom: 3,
      isLoading: false,
      locations:[],
      person:{
        lat: "",
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

  async componentWillMount(){

    await this.props.getConnections()
    console.log(this.props.currentConnections,"Hey look at this I am tring to figure something out");
    console.log("IS THIS EVER EVEN HAPPENING ");
    console.log(this.state,"this should say false ************");

    const makeRequest = async () => {
       const item = await Promise.all(this.props.currentConnections.map(async (data)=>{
        console.log('!!!data. location!!!!',data);
        data.location = await this.props.getLatLng(data.location)
        console.log("hopefully this is a clean user",data);
        //  this.setState({locations: })
        return data
      }))
      console.log(item,"This is a test to see if my location item is ");
      this.setState({isLoading: true})
      return await item
    }

    if (this.state.isLoading === false){
      console.log("Why is nothing working ");
      this.setState({isLoading: "pending"})
      makeRequest().then(data=>{
        console.log(data,"******Hey this is a really important log, so please pay attention simethingn is hwere****");
        this.setState({locations: data})
        console.log(this.state.locations);
        this.setState({isLoading: true})
        console.log(this.state.locations,"What if  this actually works!!!!!!!!!");
      })
    }
    return true
  }




  render() {



      if (!this.props.currentConnections){
        return (<div>Waiting for users to load number 1 !!!!!</div>)
      }
      if (this.props.currentConnections.length === 0 ){
        return (<div>Waiting for users to load</div>)
      }
      if(this.state.isLoading === false || this.state.isLoading === "pending"){
        return (<div>Waiting for locations to load</div>)}else{

      console.log(this.state.locations);


      const createMarker = ()=>{
        console.log("Is this being called in my Map??????");
        return this.state.locations.map(data=>{
          return (
            <Marker key={data.id} position={[data.location.lat, data.location.lng]}>
              <Popup>
                <span>{data.title}<br/></span>
              </Popup>
            </Marker>
          )
        })
      }
      const markers = createMarker()
      console.log(markers,"These are all of the markers");



    const position = [this.state.person.lat, this.state.person.lng];


    return (
      <div >
        <Nav/>
        <Map className="leaflet-container" center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />

            {this.state.isLoading === true ? createMarker(): null}
            </Map>
    </div>
    );
  }
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





//this is the map box with mapbox-redux
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Nav from './Nav'
// import Mapbox from 'react-redux-mapbox-gl';
// import mapboxgl from 'mapbox-gl';
//
//
// export default class Map extends Component {
//   state = {
//     mapStyle: {
//       width : 1400,
//       height : 800
//     },
//     mapOptions: {
//       style : 'mapbox://styles/mapbox/streets-v9'
//     }
//     }
//
//
//   render(){
//
//     return (
//       <div>
//         <Nav/>
//         <Mapbox
//           mapboxgl={mapboxgl}
//           accessToken="pk.eyJ1IjoiZGV2aW5oMTEiLCJhIjoiY2o0c2tuOG9oMWpmMTMycTY2dTgybzh5NiJ9.SCWOyJgMfSxmb0NYgRpLPA"
//           style={this.state.mapStyle}
//           options={this.state.mapOptions}
//         />
//       </div>
//     );
//   }
// }



//This is the google map render




// export default class Mapbox extends React.Component {
//
//   render() {
//       return ()
//     }
//
//
//
// }


// import GoogleMapReact from 'google-map-react';
//
//
//
//
// export default class SimpleMap extends React.Component {
//   static defaultProps = {
//     center: {lat: 59.95, lng: 30.33},
//     zoom: 11
//   };
//
//   render() {
//     return (
//       <div>
//         <Nav />
//         <div style={{width: '100%', height: '400px'}}>
//           <h1>Hello Simple Map</h1>
//            <GoogleMapReact
//             resetBoundsOnResize
//             defaultCenter={this.props.center}
//             defaultZoom={this.props.zoom}
//             bootstrapURLKeys={{
//     					key: 'AIzaSyCYZ_MHNl3DWZmf6GF4Y66oi4Rcki4gcrg'
//     				}}
//             >
//
//
//           </GoogleMapReact>
//
//         </div>
//       </div>
//     );
//   }
// }
