import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, createBottomTabNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen'; 
import Icon from 'react-native-vector-icons/FontAwesome';

 export default class App extends React.Component {


  render() {
    return (
    <AppStackNavigator  />
      
    );
  }


}

const AppStackNavigator = TabNavigator({
  Login:{
    screen: LoginScreen
  },
  Map: {
    screen: MapScreen
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions:{
    labelStyle:{
      fontSize:8,
      padding:0,
      margin:0
    },
    showIcon:true,
    style: {
      //height:50
      //paddingBottom:30
    },
    showLabel:false,
    activeTintColor: '#f4ee42',

  }


});



const styles = StyleSheet.create({
  container: {
    
  },
});

///export default createAppContainer(AppStackNavigator);