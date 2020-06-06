import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios';
import '../css/HotelsMap.css';



const mapStyles = {
  width: '295px',
  // height: '100%'
  height: '163px',
  margin: '0px'
};

class HotelsMap extends Component {

  state = {
    showInfo: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
    hotelName: '',
    mapData: null
  };


  async componentDidMount() {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.props.hotelName}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    const nameSearch = await axios(url)
    // console.log(nameSearch.data.results[0].geometry.location)
    this.setState({
      mapData: nameSearch.data.results[0].geometry.location
    })
    // console.log(this.state.mapData)
    console.log(process.env.REACT_APP_GOOGLE_API_KEY)
  } 
    
  

  passHotelName = () => {
    this.setState({
      hotelName: this.props.hotelName
    })
    console.log(this.state.hotelName)
  }

 

  markerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfo: true
    });

  onClose = () => {
    if (this.state.showInfo) {
      this.setState({
        showInfo: false,
        activeMarker: null
      });
    }
  };

  // checkClick = () => {
  //   this.passHotelName()
  //   this.markerClick()
  // }

  render() {
    
    return (
      <div className="rendered-map">
        <>
        {
          this.state.mapData &&
          <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.state.mapData.lat, lng: this.state.mapData.lng
            // lat: 48.843753, lng: 2.3718805
          }}
          >
            
           
          <Marker
            onClick={this.markerClick}
            name={this.props.hotelName}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showInfo}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>

        </Map>
         }
         </>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(HotelsMap);
