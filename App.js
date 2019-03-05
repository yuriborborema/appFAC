import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import {Permissions, Location} from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CreateStackNavigator} from 'react-navigation';

export default class App extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      region: null,
    }

    this._getLocationAsync();

  }

  jsonMapa = [
    
  ]


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
      //<View>
      //<Text style={{flex:1}}> hi</Text>
      
      <View style={styles.container}>
      
        <MapView style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation={true}
          customMapStyle={              //tira landmarks do mapa
          [
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }
          ]}

          >

           <MapView.Marker
              coordinate={{
                latitude:-16.700380,
                longitude: -49.242091,
              }}
              title={'Home '}
              description={'Comunidade  Santa Clara'}
              image={require('./images/church.png')}
              
          />

          </MapView>

          <View style={styles.textInputCont}>
          <Ionicons name="md-search" size={28} style={{transform: [{ rotate: '90deg'}]}} color="#ffe047" />
          <TextInput placeholder="Procure e acharás !"/>
          <Icon name="filter" size={28} color="#ffe047" />

          </View>

          <View style={styles.addChurch}>
          <Icon name="plus-circle" size={65} color="#ffe047" />

          </View>
      </View>
      //</View>
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
    top:0,
    left: 0,
    bottom: 50,
    right: 0
  },
  textInputCont:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',    
    bottom:500,
    height:35,
    width:250,
    position: 'absolute',
    backgroundColor: 'white',
    shadowColor: '#000000' ,
     elevation: 7,
     shadowRadius: 5,
     shadowOpacity: 1.0,
     borderRadius: 20,
  },
  addChurch:{
    position: 'absolute',
    bottom: 85,
    right:35,
    backgroundColor: 'white',
    shadowColor: '#000000' ,
    width: 100,
    height: 100,
    borderRadius: 100/2,
    
    elevation: 7,
     shadowRadius: 10,
     shadowOpacity: 1.1,
    
  }
});
