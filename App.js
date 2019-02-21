import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import {Permissions, Location} from 'expo';

export default class App extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      region: null,
    }

    this._getLocationAsync();

  }


  _getLocationAsync = async () => {

    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted'){
        //Alert.alert('Por favor, permita a utilização de sua Localização');
        console.log('no permission');
      }

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      let region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
      }

      this.setState({region: region});

  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation={true}
          >

          {<MapView.Marker
              coordinate={{
                latitude:-16.700380,
                longitude: -49.242091,
              }}
              title={'Home'}
              description={'Yuris home'}
          />}

          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      top:0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top:80,
    left: 10,
    bottom: 200,
    right: 10
  }
});
