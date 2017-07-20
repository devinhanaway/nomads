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
      zoom: 5,
      isLoading: true,
      locations:[],

    }
  }

 componentWillMount(){
    if(this.state.isLoading === true){
      const makeRequest = async (item) => {
            // const locationArray =[]
            // console.log(locationArray);
            const locationArray =[]
            const devin = await Promise.all(item.connections.map( async (locationData)=>{
            console.log('!!!locationData. location!!!!',locationData);
            locationData.location = await this.props.getLatLng(locationData.location)
            console.log("Trying to clean daa, did this work?")
            return locationData}))
            this.setState({locations: devin})
            console.log(this.state.locations);
            this.setState({isLoading: false})
            return await devin
          //   this.props.getLatLng(locationData.location).then(data=>{
          //     console.log(data);
          //     // console.log(locationArray);
          //     locationData.location = data
          //     console.log(locationData)
          //     locationArray.push(locationData)
          //     return locationData
          //   })
          // })
          // console.log(locationArray)


      }
      // const makeRequest = (item) => {
      //       const locationArray =[]
      //       console.log(locationArray);
      //       locationArray.push(item.connections.map((locationData)=>{
      //       console.log('!!!locationData. location!!!!',locationData);
      //       this.props.getLatLng(locationData.location).then(data=>{
      //         console.log(data);
      //         console.log(locationArray);
      //         locationData.location = data
      //         console.log(locationData)
      //         return locationData
      //       })
      //     })
      //
      //   if (locationArray.length = item.connections.length){
      //     console.log(locationArray);
      //     this.setState({locations: locationArray[0]})
      //       console.log(this.state.locations)
      //       this.setState({isLoading: false})
      //       return locationArray
      //     }
      // }






    this.props.getConnections()
    .then(()=>{
      console.log(this.props.currentConnections);
      this.setState({isLoading: "pending"})
      return this.state.isLoading
    }).then(data=>{
      console.log(this.state.isLoading)
      console.log(this.props.currentConnections)
      return this.props.currentConnections
      })
      .then(places=>{
        console.log(places)

        if(this.props.currentConnections !== 0 && this.props.currentConnections !== null && this.state.isLoading === "pending"){
          makeRequest(places)
          // .then(place=>{
          //   console.log(place);
          //   this.setState({locations: place})
          // })
        //   .then(data=>{
        //   console.log(data,"******Hey this is a really important log, so please pay attention simethingn is hwere****");
        //   this.setState({locations: data})
        //   console.log(this.state.locations);
        //   this.setState({isLoading: false})
        //   console.log(this.state.locations,"What if  this actually works!!!!!!!!!")
        // })
      }else{
        console.log("this didn't really work");
      }


      })
    }



      // this.setState({isLoading: false})



      //
      // if (this.state.isLoading === true){
      //   console.log("Why is nothing working ");
      //   this.setState({isLoading: "pending"})
      //     await makeRequest().then(data=>{
      //     console.log(data,"******Hey this is a really important log, so please pay attention simethingn is hwere****");
      //     this.setState({locations: data})
      //     console.log(this.state.locations);
      //     this.setState({isLoading: false})
      //     console.log(this.state.locations,"What if  this actually works!!!!!!!!!");
      //   })
      // }
    // if(this.props.currentConnections !== 0){
    //   await this.props.getConnections()
    //   console.log(this.props.currentConnections,"Hey look at this I am tring to figure something out");
    //
    //   // this.setState({isLoading: false})
    //
    //   const makeRequest = () => {
    //      const item = await
    //
    //       Promise.all(this.props.currentConnections.map(async (data)=>{
    //       console.log('!!!data. location!!!!',data);
    //       data.location = this.props.getLatLng(data.location)
    //       console.log("hopefully this is a clean user",data);
    //       //  this.setState({locations: })
    //       return data
    //     }))
    //     console.log(item,"This is a test to see if my location item is ");
    //     this.setState({isLoading: true})
    //     return await item
    //   }
    // }
    //
    //   if (this.state.isLoading === true){
    //     console.log("Why is nothing working ");
    //     this.setState({isLoading: "pending"})
    //       await makeRequest().then(data=>{
    //       console.log(data,"******Hey this is a really important log, so please pay attention simethingn is hwere****");
    //       this.setState({locations: data})
    //       console.log(this.state.locations);
    //       this.setState({isLoading: false})
    //       console.log(this.state.locations,"What if  this actually works!!!!!!!!!");
    //     })
    //   }



    // return true

  }






  render() {

    const position = [39.742043, -104.991531]


      if (!this.props.currentConnections){
        return (
          (    <div >
                <Nav/>
              <Map className="leaflet-container" center={position} zoom={this.state.zoom}>
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                      />


                    </Map>
            </div>)
        )
      }
      if (this.props.currentConnections.length === 0 ){
        return (    <div >
              <Nav/>
            <Map className="leaflet-container" center={position} zoom={this.state.zoom}>
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />


                  </Map>
          </div>)
      }
      if(this.state.isLoading === true || this.state.isLoading === "pending"){
        return (
          (    <div >
                <Nav/>
              <Map className="leaflet-container" center={position} zoom={this.state.zoom}>
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                      />


                    </Map>
            </div>)
        )}else{

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





    return (
      <div >
        <Nav/>
        <Map className="leaflet-container" center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />

            {this.state.isLoading === false ? createMarker(): null}
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
