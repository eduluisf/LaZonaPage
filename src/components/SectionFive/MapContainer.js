import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapContainerStyles: {
        width: '85%',
        position: 'absolute',
        height: '90vh', 
        display: 'flex', 
        justifyContent: 'center', 
        marginLeft:'8%',
      }
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const width = window.innerWidth;
    let updatedStyles = { ...this.state.mapContainerStyles };


    if (width >= 1201) {
      updatedStyles.width = '90%';
      updatedStyles.marginLeft = '5%';
      updatedStyles.height = '58vh'; // Ajusta el height para pantallas más pequeñas
    }

    if (width <= 1200) {
      updatedStyles.width = '90%';
      updatedStyles.marginLeft = '5%';
      updatedStyles.height = '48vh'; // Ajusta el height para pantallas más pequeñas
    }

    if (width <= 992) {
      updatedStyles.width = '85%';
      updatedStyles.marginLeft = '8%';
      updatedStyles.height = '55vh'; // Ajusta el height para pantallas más pequeñas
    }

    if (width <= 768) {
      updatedStyles.width = '85%';
      updatedStyles.marginLeft = '8%';
      updatedStyles.height = '75vh'; // Ajusta el height para pantallas más pequeñas
    }

    this.setState({ mapContainerStyles: updatedStyles });
  }

  render() {
    const { mapContainerStyles } = this.state;

    return (
      <div style={mapContainerStyles}>
        <Map
          google={this.props.google}
          zoom={17}
          style={{ width: '100%', height: '100%', borderRadius: '8px' }}
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
