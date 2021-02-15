import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import * as firebase from "firebase";

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "AppMain" : "SignUp");
    });
  }
  render() {
    return (
      <View style={styles.container}>
 <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }} >Hello! Wlcome to smart English app</Text>
      <Image
          style={{ width:"50%", height: 300 }}
          source={require('../assets/myLog1.png')}
          resizeMode="contain"
        />
     
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
   fontSize: 40,
    color: '#191970', 
  }
});
