import React, { Component } from 'react';
import { View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import shippingAddressStyles from './styles/shippingAddressStyles';

class ShippingAddressPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
    );
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { latitude, longitude } = this.state;

    return (
      <View style={shippingAddressStyles.container}>
        <MapView
          style={shippingAddressStyles.map}
          region={{
            latitude: 52.09755,
            longitude: 23.68775,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 52.09755, longitude: 23.68775 }}
            title="Brest"
            description="Belarus"
          />
        </MapView>
      </View>
    );
  }
}

export default (ShippingAddressPage);
