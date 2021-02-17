import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import { AsyncStorage } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("AppMain");
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
       <Image
          style={{ width:"40%", height: 200 }}
          source={require('../assets/mylo.png')}
          resizeMode="contain"
        />

      <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }} >Hello! welcome to smart English app</Text>
      
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
        
          style={styles.textIn}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textIn}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
          <TouchableOpacity 
                  onPress={() => this.handleLogin()}
                  style={{ width: 350, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 30 }}
                  >
                  <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16, }}>Sign In </Text>
                </TouchableOpacity>

         <TouchableOpacity 
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={{ width: 280, backgroundColor: '#FFF', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
          >
          <Text style={{ textAlign: 'center', color: '#0d47a1', fontSize: 15, padding:10, }}>Don't have an account? Create here </Text>
        </TouchableOpacity>
         <FontAwesome.Button name="google" backgroundColor="#ff6347" onPress={() => this.props.navigation.navigate("googleLogScreen")}>
         Login with Google    </FontAwesome.Button>
           <FontAwesome.Button name="facebook" backgroundColor="#03a9f4" onPress={() => this.props.navigation.navigate("facebookLogScreen")}>
         Login with Facebook </FontAwesome.Button>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  textIn: {
    height: 45,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    fontSize: 19,
    padding:12,
    marginBottom: 10,
    marginBottom: 10,
    
  }
});
