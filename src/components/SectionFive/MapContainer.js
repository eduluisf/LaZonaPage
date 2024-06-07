// MapContainer.js
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapContainerStyles = {
      width: '85%',
      height: '65%',
      position: 'absolute',


    };

    const mapStyles = {
      width: '100%',
      height: '100%',
      borderRadius: '8px',

    };
    
    return (
      <div style={mapContainerStyles}>
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{ lat: 11.5485676, lng: -72.906958 }}
        >
          <Marker position={{ lat: 11.5485676, lng: -72.906958 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA3DEKJE1HeAY2yEHK6sPuRu8cQg8PauAU' // Reemplaza con tu propia clave de API
})(MapContainer);
