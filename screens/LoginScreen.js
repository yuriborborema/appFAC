import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class LoginScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor}) => (
      <Icon name="wechat" size={25} style={{color: tintColor}} />
    )
  }

    render(){
        return(
            <View style={styles.container}>
                <Button title = "Log in!" onPress={()=> {Alert.alert('fgafa')}} />

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      top:200,
    },
  });