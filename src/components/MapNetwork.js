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
            const devin = await Promise.all(item.connections.concat([]).map( async (locationData)=>{
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

      }else{
        console.log("this didn't really work");
      }


      })
    }

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
