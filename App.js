import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={{
            latitude:-16.700380,
            longitude: -49.242091,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          >

          <MapView.Marker
              coordinate={{
                latitude:-16.700380,
                longitude: -49.242091,
              }}
              title={'Home'}
              description={'Yuris home'}
          />

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
