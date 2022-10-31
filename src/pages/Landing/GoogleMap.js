import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


//note: code formatted for ES6 here
export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 40.7367,
        lng: -73.8203
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map 
          google={this.props.google}
          style={{width: '100%', height: '270px', position: 'absolute'}}
          initialCenter = {{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center = {{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}>
          <Marker
            position = {{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
            name={'CUNY Queens College'}
            />
          </Map>
      )
    }
  }


  export default GoogleApiWrapper({
    apiKey: ('AIzaSyD8P0CfxHZyYlWm1WdP6qUSNvILHG6Hp2s')
  })(MapContainer)