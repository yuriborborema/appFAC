import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, createBottomTabNavigator } from 'react-navigation';
import {CreateStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen'

 export default class App extends React.Component {


  constructor(props){
    super(props);


  }

  render() {
    return (
      <AppStackNavigator  />
    );
  }


}

const AppStackNavigator = TabNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Map: {
    screen: MapScreen
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions:{
    labelStyle:{
      fontSize:8,
      padding:6,
    },
    showIcon:true
  }


});

const styles = StyleSheet.create({
  container: {
    
  },
});

///export default createAppContainer(AppStackNavigator);