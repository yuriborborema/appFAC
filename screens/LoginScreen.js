import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LoginScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Button title = "Log in!" onPress={()=> this.props.navigation.navigate('Map')} />

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