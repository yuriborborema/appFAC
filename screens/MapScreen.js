import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import MapView from 'react-native-maps';
import {Callout} from 'react-native-maps';
import {Permissions, Location} from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Marker } from 'react-native-maps';
import firebase from 'firebase';

export default class MapScreen extends React.Component {


  constructor(props){
        super(props);
        var markers1 = [
          {
            latlng:{
              latitude:-16.700380,
              longitude: -49.242091,
            },
            title:"Santa clara",
            description:"fafafafa",
          },
          {
            latlng:{
              latitude:-16.701380,
              longitude: -49.242491,
            },
            title:"Sao jose",
            description:"mnmmnmn",
          },          
        
        ];
        this.state = {
          region: null,
          markers: markers1,

        }
        this._getLocationAsync();
    }

    componentWillMount(){
      var config = {
        apiKey: "AIzaSyCol2g7tuxtiIh9nrLMg88PQlNaQjMo2qk",
        authDomain: "appfac-81c0e.firebaseapp.com",
        databaseURL: "https://appfac-81c0e.firebaseio.com",
        projectId: "appfac-81c0e",
        storageBucket: "",
        messagingSenderId: "567295223135"
      };
      firebase.initializeApp(config);

      var id=1;

      firebase.database().ref('church/'+id).set(
        {
          nome: "Comunidade Santa Clara",
          matriz: false,
          paroquia: "Paróquia São Francisco",
          missas: true,
          hormissas:{
            sab: 19.3,
            dom: 9
          },
          confissao:false,
          horconfissao:false,
          latlng:{
            latitude:-16.700380,
            longitude: -49.242091,
          },

        }
      ).then(() => {
        Alert.alert("conected!");
      }).catch((error) => {
        Alert.alert(error);
      })
    }


  static navigationOptions = {
      tabBarIcon: ({ tintColor}) => (
        <Icon name="globe"  size={25} style={{color: tintColor}} />
      )
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
          longitudeDelta: 0.01,
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

          
            {this.state.markers.map(marker => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
              />
            ))}
          

          </MapView>
          <Callout>
            <View style={styles.textInputCont}>
            <Icon name="search" size={25} style={{transform: [{ rotate: '90deg'}]}} color="#ffe047" />
            <TextInput placeholder="Procure e acharás!"/>         

            </View>
          </Callout>

          
      </View>
      //</View>
    );
  }
}

/*

///////botao add igreja ////
///<View style={styles.addChurch}>
          <Icon name="plus-circle" size={65} color="#ffe047" />

          </View>


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

  ///// um marker com imagem e callout custom

  <MapView.Marker
                  coordinate={{
                    latitude:-16.700380,
                    longitude: -49.242091,
                  }}
                  
                  image={require('../images/church.png')}>
                      
                  
                  <MapView.Callout onPress={()=> {Alert.alert('fafa')}}>
                      <View style={styles.calloutMarker}>
                      <Icon name="heart" size={15} />
                      </View>
                    </MapView.Callout>
            </MapView.Marker>



  /////// inserting firebase
  firebase.database().ref('users/002').set(
        {
          name: 'fafa',
          age: 202
        }
      ).then(() => {
        Alert.alert("conected!");
      }).catch((error) => {
        Alert.alert(error);
      })

          */

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
    bottom: 0,
    right: 0
  },
  textInputCont:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',    
    bottom:450,
    
    height:35,
    width:250,
    position: 'relative',
    backgroundColor: 'white',
    shadowColor: '#000000' ,
     elevation: 7,
     shadowRadius: 5,
     shadowOpacity: 1.0,
     borderRadius: 20,
  },
  calloutMarker:{

  }

  
});
